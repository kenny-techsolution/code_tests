//https://leetcode.com/problems/move-zeroes/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var nonZeroIndex = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }
    for (i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
    console.log(nums);
};