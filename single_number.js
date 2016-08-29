//https://leetcode.com/problems/single-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	nums = nums.sort(function(a, b) {
		return a - b
	});
	for (var i = 0; i < nums.length; i += 2) {
		if (nums[i] !== nums[i + 1]) {
			return nums[i];
		}
	}
};