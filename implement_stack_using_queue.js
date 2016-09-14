//https://leetcode.com/problems/implement-stack-using-queues/
/**
 * @constructor
 */
var Stack = function() {
	this.array = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
	this.array.push(x);
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
	this.array.pop();
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
	return this.array[this.array.length - 1];
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
	var bool = (this.array.length === 0);
	return bool;
};