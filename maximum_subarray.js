//https://leetcode.com/problems/maximum-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var sum = 0;
    var answer = Number.NEGATIVE_INFINITY;
    var minSum = 0;
    if (nums.length === 0) {
        return 0;
    }

    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
        answer = Math.max(answer, sum - minSum);
        minSum = Math.min(minSum, sum);
        //console.log("sum:"+sum+",answer:"+answer+",minSum:"+minSum);
    }
    return answer;
};