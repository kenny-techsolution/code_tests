// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution.
// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (i=0;i<nums.length;i++) {
        for(j=(i+1);j<nums.length;j++) {
            if(target==(nums[i]+nums[j])){
                var number=[i,j];
                return number;
            }
        }
    }
};