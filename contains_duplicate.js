//https://leetcode.com/problems/contains-duplicate/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if(nums.length ===0) {
        return false;
    }
    nums = nums.sort();
    var temp = 1.1;
    for(i=0;i<nums.length;i++){
        if(temp===nums[i]) {
            return true;
        }
        temp = nums[i];
    }
    return false;
};