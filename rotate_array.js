//https://leetcode.com/problems/rotate-array/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
	var numsCopy = nums;
	var splitIndex = k % nums.length;
	after = nums.splice(-splitIndex, splitIndex);
	console.log(after);
	console.log(nums);
	for (var i = after.length - 1; i > -1; i--) {
		nums.unshift(after[i]);
	}
};