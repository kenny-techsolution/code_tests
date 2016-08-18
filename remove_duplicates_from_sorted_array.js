//https://leetcode.com/problems/remove-duplicates-from-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var nonRepeatIndex = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i + 1] !== nums[i] || i == (nums.length - 1)) {
            nums[nonRepeatIndex] = nums[i];
            nonRepeatIndex++;
        }
    }
    var numPop = nums.length - nonRepeatIndex;
    for (i = 0; i < numPop; i++) {
        nums.pop();
    }
    return nums.length;
};