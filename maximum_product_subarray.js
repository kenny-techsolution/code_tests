//https://leetcode.com/problems/maximum-product-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    var max = [];
    var min = [];
    var result = nums[0];
    min[0] = max[0] = nums[0];
    for (var i = 1; i < nums.length; i++) {
        console.log("test");
        max[i] = min[i] = nums[i];
        if (nums[i] > 0) {
            max[i] = Math.max(max[i], max[i - 1] * nums[i]);
            min[i] = Math.min(min[i], min[i - 1] * nums[i]);
        } else if (nums[i] < 0) {
            max[i] = Math.max(max[i], min[i - 1] * nums[i]);
            min[i] = Math.min(min[i], max[i - 1] * nums[i]);
        }

        result = Math.max(result, max[i]);
        //console.log(result,max[i]);
    }
    return result;
};