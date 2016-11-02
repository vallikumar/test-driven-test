var Calculator = function () {
	//var withExponents = function () {

		this.pow = function (op1, op2) {
			return Math.pow(op1, op2);
		};

		this.multiplyExp = function () {
			var previousPowerOfPair = 1.0;
			for (var index = 0; index < arguments.length; index++) {
				var pair = arguments[index];
				if (typeof pair === 'object' && pair.length === 2) {
					// Steps for Multiplying Exponents
					// Step 1 : First simplify the exponents.
					var powerOfPair = this.pow(pair[0], pair[1]);
					// Step 2 : Then, multiply the resultants.
					previousPowerOfPair = powerOfPair * previousPowerOfPair;
				} else {
					throw (new Error(
						'withExponents.multiplyExp() failed with invalid arguments: ' + String(pair)));
				}
			}
			return previousPowerOfPair;
		};

		this.divideExp = function () {
			var previousPowerOfPair = 1.0;
			for (var index = 0; index < arguments.length; index++) {
				var pair = arguments[index];
				if (typeof pair === 'object' && pair.length === 2) {
					// Steps for Dividing Exponents
					// Step 1 : Simplify the given exponent.
					var powerOfPair = this.pow(pair[0], pair[1]);
					// Step 2 : Then divide the exponents after
					// simplified, for final
					// result.
					if (index > 0) {
						previousPowerOfPair = previousPowerOfPair / powerOfPair;
					} else {
						previousPowerOfPair = powerOfPair;
					}
				} else {
					throw (new Error(
						'withExponents.divideExp() failed with invalid arguments: ' + String(pair)));
				}
			}
			return previousPowerOfPair;
		};


	//};
	//return withExponents;
};
/*
//define a sub class exponnets calculator
function ExponentsCalculator() {}
ExponentsCalculator.prototype = new Calculator();
ExponentsCalculator.prototype.constructor = Calculator;
//Add methods to the base class
ExponentsCalculator.prototype.pow = function () {
	var x = 2;
	var y = 3;
	return Math.pow(x, y);
};
ExponentsCalculator.prototype.multiplyExp = function () {
	var x = 2;
	var y = 3;
	varz = 4;
	var s = Math.pow(x, y);
	var v = Math.pow(x, z);
	return s * v;
};
var ec = new ExponentsCalculator();
*/

/*** given Mocha test cases to run **/

describe("withExponents", function () {
	global.expect = require('chai').expect;
	var calculator;
	//beforeEach(function () {
		calculator = new Calculator();
		//withExponents.call(calculator);
	//});
	it("returns 2^3", function () {
		expect(calculator.pow(2, 3)).to.equal(8);
	});
	it("multiplies 2^3 and 2^4", function () {
		expect(calculator.multiplyExp([2, 3], [2, 4])).to.equal(128);
	});
	it("divides 2^3 by 2^5", function () {
		expect(calculator.divideExp([2, 3], [2, 5])).to.equal(0.25);
	});
});