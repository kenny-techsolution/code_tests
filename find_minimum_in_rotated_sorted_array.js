//https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var start = 0;
    var end = nums.length - 1;
    var mid = 0;
    while (start < end) {
        mid = start + Math.floor((end - start) / 2);
        if (nums[mid] > nums[end]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return nums[end];
};