//https://leetcode.com/problems/product-of-array-except-self/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    //create array that contains the multiplied result before the index value. 
    var answer = [1];

    for (var i = 1; i < nums.length; i++) {
        answer[i] = answer[i - 1] * nums[i - 1];
    }

    var temp = 1;

    //get the multiplied result after the index value and multiply it with the values stored in that index from the last loops to get the final answer.
    answer[answer.length - 1] *= temp;
    for (var j = answer.length - 2; j > -1; j--) {
        temp *= nums[j + 1];
        answer[j] *= temp;
    }

    return answer;
};