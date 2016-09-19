//https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/
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
        console.log("mid:" + mid);
        while (nums[mid] === nums[end] && mid < end) {
            console.log("while1");
            end--;
        }
        while (nums[mid] === nums[start] && mid > start) {
            console.log("while2");
            start++;
        }
        if (nums[mid] > nums[end]) {
            console.log("start + 1");
            start = mid + 1;
        } else {
            console.log("start - 1");
            end = mid;
        }
    }
    //return Math.min(nums[end],nums[start]);
    return nums[end];
};