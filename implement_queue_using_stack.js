//https://leetcode.com/problems/implement-queue-using-stacks/
/**
 * @constructor
 */
var Queue = function() {
	this.array = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
	this.array.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
	this.array.shift();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
	return this.array[0];
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
	return this.array.length === 0;
};