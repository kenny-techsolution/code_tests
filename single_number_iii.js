//https://leetcode.com/problems/single-number-iii/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var answer = [];
    if (nums.length === 0) {
        return [0, 0];
    }
    if (nums.length === 1) {
        return [0, nums[0]];
    }
    nums = nums.sort(function(a, b) {
        return a - b
    });
    var i = 0;

    while (i < nums.length) {
        if (nums[i] === nums[i + 1]) {
            i += 2;
        } else {
            answer.push(nums[i]);
            i++;
        }
    }
    if (answer.length === 1) {
        answer.push(0);
    }
    return answer;
};