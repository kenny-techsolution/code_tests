//https://leetcode.com/problems/missing-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

    nums = nums.sort(function(a, b) {
        a - b;
    });

    var length = nums.length;

    var sum = length * (length + 1) / 2;

    var comp = 0;
    for (var i = 0; i < nums.length; i++) {
        comp += nums[i];
    }

    return sum - comp;
};