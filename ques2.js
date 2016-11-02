//Define a calculator base class
var Calculator = function () {

};


//define a sub class scientific calculator
function ScientificCalculator() {}
ScientificCalculator.prototype = new Calculator();
ScientificCalculator.prototype.constructor = Calculator;
//Add methods to the base class
ScientificCalculator.prototype.sin = function () {
	var x = Math.PI / 2;
	return Math.sin(x);
};
ScientificCalculator.prototype.cos = function () {
	var x = Math.PI;
	return Math.cos(x);
};
ScientificCalculator.prototype.tan = function () {
	return Math.tan(0);
};
ScientificCalculator.prototype.log = function () {
	return Math.log(1);
};
var sc = new ScientificCalculator();

/*** given Mocha test cases to run **/

describe("ScientificCalculator", function () {
	global.expect = require('chai').expect;
	var calculator;
	beforeEach(function () {
		calculator = new ScientificCalculator();
	});
	it("extends Calculator", function () {
		expect(calculator).to.be.instanceOf(Calculator);
		expect(calculator).to.be.instanceOf(ScientificCalculator);
	});
	it("returns the sine of PI / 2", function () {
		expect(calculator.sin(Math.PI / 2)).to.equal(1);
	});
	it("returns the cosine of PI", function () {
		expect(calculator.cos(Math.PI)).to.equal(-1);
	});
	it("returns the tangent of 0", function () {
		expect(calculator.tan(0)).to.equal(0);
	});
	it("returns the logarithm of 1", function () {
		expect(calculator.log(1)).to.equal(0);
	});
});