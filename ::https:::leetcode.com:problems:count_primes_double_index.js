//https://leetcode.com/problems/count-primes/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    //start from the first index
    function sortNum(a, b) {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    }

    nums = nums.sort(sortNum);
    console.log(nums);
    var m = 0;
    var n = 0;
    var firstNum = 0;
    var secondNum = 0;
    var thirdNum = 0;
    var answerSet = [];
    var result = 0;
    for (i = 0; i < nums.length - 2; i++) {
        if (nums[i - 1] !== undefined && nums[i - 1] === nums[i]) {
            continue;
        }
        console.log(nums[i]);
        firstNum = nums[i];
        m = i + 1;
        n = nums.length;
        while (m < n) {
            firstNum = nums[i];
            secondNum = nums[m];
            thirdNum = nums[n];
            result = firstNum + secondNum + thirdNum;
            if (result === 0) {
                console.log([firstNum, secondNum, thirdNum]);
                answerSet.push([firstNum, secondNum, thirdNum]);
                while (m < n && nums[m] == nums[m + 1]) {
                    m++;
                }
                while (m < n && nums[n] == nums[n - 1]) {
                    n--;
                }
                m++;
                n--;
            } else if (result < 0) {
                m++;
            } else {
                n--;
            }
        }
    }
    return answerSet;
};