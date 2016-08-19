//https://leetcode.com/problems/contains-duplicate-iii/
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {

	for (i = 0; i < nums.length; i++) {
		for (j = i + 1; j < nums.length; j++) {
			if (Math.abs(nums[j] - nums[i]) <= t && (j - i) <= k) {
				console.log(nums[i]);
				console.log(nums[j]);
				return true;
			}
		}
	}
	return false;
};