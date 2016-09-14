//https://leetcode.com/problems/range-sum-query-immutable/
/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
	this.nums = nums;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
	var sum = 0;
	for (var k = i; k <= j; k++) {
		sum += this.nums[k];
	}
	return sum;
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */