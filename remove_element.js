//https://leetcode.com/problems/remove-element/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    nums = nums.sort();
    var nonMatchedIndex = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[nonMatchedIndex] = nums[i];
            nonMatchedIndex++;
        }
    }

    //console.log(nums);
    var numsPop = nums.length - nonMatchedIndex;

    while (numsPop > 0) {
        nums.pop();
        numsPop--;
    }
    return nums.length;
};