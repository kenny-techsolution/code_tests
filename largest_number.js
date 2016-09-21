//https://leetcode.com/problems/largest-number/
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    function comp(a, b) {
        var afront = Number(a.toString() + b.toString());
        var bfront = Number(b.toString() + a.toString());
        return bfront - afront;
    }
    nums = nums.sort(comp);

    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i] === 0) {
            nums[i] = "";
        }
        if (nums[i] > 0) {
            break;
        }
    }
    var answer = nums.join("");
    return answer;
};