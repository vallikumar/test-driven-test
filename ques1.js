//Define a calculator base class
var Calculator = function (op1, op2) {
	this.add = function (op1, op2) {
		return op1 + op2;
	};
	this.multiply = function (op1, op2) {
		return op2 * op1;
	};
	this.subtract = function (op1, op2) {
		return op1 - op2;
	};
	this.divide = function (op1, op2) {
		if (op2 === 0) {
			throw new TypeError("The second parameter cannot be zero");
		} else {
			return op1 / op2;
		}
	};
};


/***given Mocha test Case ***/
describe("Calculator", function () {


	global.expect = require('chai').expect;
	var calculator;

	beforeEach(function () {
		calculator = new Calculator();
	});
	it("adds 1 and 2", function () {
		expect(calculator.add(1, 2)).to.equal(3);
	});
	it("subtracts 2 from 9", function () {
		expect(calculator.subtract(9, 2)).to.equal(7);
	});
	it("multiplies 4 and 3", function () {
		expect(calculator.multiply(4, 3)).to.equal(12);
	});
	it("divides 10 by 2", function () {
		expect(calculator.divide(10, 2)).to.equal(5);
	});
	it("does not divide by 0", function () {
		expect(calculator.divide(5, 0)).to.equal(NaN);
	});
});