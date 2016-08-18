//https://leetcode.com/problems/majority-element/
/**
 * @param {number[]} nums
 * @return {number}
 * The majority element (if it exists) will also be the median. We can find the median in O(n) and then check that it is indeed a valid majority element in O(n).
 */
var majorityElement = function(nums) {
	nums = nums.sort();
	return nums[Math.floor(nums.length / 2)];
};