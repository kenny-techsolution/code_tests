//https://leetcode.com/problems/permutations/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 0) {
        return [
            []
        ];
    }
    var answerArray = [];
    var nArray = [];

    function generate(digits, nums, inArray) {

        for (var i = 0; i < nums.length; i++) {
            var tempArray = copyArray(inArray);
            if (inArray.indexOf(nums[i]) === -1) {
                tempArray.push(nums[i]);
                //when the digit is only 1, we need to output the permutation array
                if (digits === 1) {
                    answerArray.push(tempArray);
                    break;
                } else {
                    generate(digits - 1, nums, tempArray);
                }
            }
        }

    }
    var length = nums.length;
    generate(length, nums, nArray);
    return answerArray;
};

function copyArray(inputArray) {
    var outputArray = [];
    for (var i = 0; i < inputArray.length; i++) {
        outputArray.push(inputArray[i]);
    }
    return outputArray.reverse();
}