//https://leetcode.com/problems/contains-duplicate-ii/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

	for (i = 0; i < nums.length; i++) {
		for (j = i + 1; j < nums.length; j++) {
			if (nums[i] === nums[j] && (j - i) <= k) {
				return true;
			}
		}
	}
	return false;
};