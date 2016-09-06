//https://leetcode.com/problems/single-number-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var answer = [];
    nums = nums.sort();
    var i = 0;

    while (i < nums.length) {
        if (nums[i] === nums[i + 1] && nums[i + 1] === nums[i + 2]) {
            i += 3;
        } else {
            return nums[i];
        }
    }
    return 0;
};