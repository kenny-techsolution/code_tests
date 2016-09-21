//https://leetcode.com/problems/sort-colors/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var begin = -1;
    var end = nums.length;
    var i = 0;
    var swap = function(array, a, b) {
        var temp = array[a];
        array[a] = array[b];
        array[b] = temp;
    };
    while (i < end) {
        //attention: use pre-increment instead of post-increment.
        if (nums[i] === 0 && i != (++begin)) {
            swap(nums, i, begin);
        } else if (nums[i] === 2 && i != (--end)) {
            swap(nums, i, end);
        } else {
            i++;
        }
    }
};