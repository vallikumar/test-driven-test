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

function calcDelay() {
	/**
	 * @param {Number} milliseconds
	 * @param {Object} scope
	 * @param {String} methodName
	 * @param {Array<?>} args
	 * @return {Promise} Resolves to method scope[methodName](args) result.
	 */
	var delay = function (milliseconds, scope, methodName, args) {
		var thePromise = new Promise(function (resolve, reject) {
			setTimeout(function () {
				try {
					var method = scope[methodName];
					var result = method.apply(scope, args);
					resolve(result);
				} catch (error) {
					error.scope = scope;
					error.methodName = methodName;
					error.args = args;
					reject(error);
				}
			}, milliseconds);
		});
		return thePromise;
	};
	return delay;
};
var delay = new calcDelay();




/*** given Mocha test cases to run **/

describe("delay", function () {
	global.expect = require('chai').expect;

	var calculator = new Calculator();
	it("returns a promise", function () {
		var willAdd = delay(100, calculator, 'add', [1, 1]);
		expect(willAdd).to.be.instanceOf(Promise);
		expect(willAdd).to.be.fulfilled;
	});
	it("delays execution", function () {
		expect(delay(1000, calculator, 'add', [10, 5])).to.eventually.equal(15);
		expect(delay(500, calculator, 'subtract', [9, 5])).to.eventually.equal(4);
	});
	it("cannot execute functions that do not exist", function () {
		expect(delay(1000, calculator, 'sqrt', [2, 2])).to.be.rejected;
	});
});