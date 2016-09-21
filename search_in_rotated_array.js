//https://leetcode.com/problems/search-in-rotated-sorted-array/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var start = 0;
    var end = nums.length - 1;

    if (nums.length > 2) {
        while (start + 1 < end) {
            mid = start + Math.floor((end - start) / 2);
            //console.log("start:"+start+",end:"+end+",mid:"+mid);
            if (nums[mid] === target) {
                return mid;
            } else {
                if (nums[mid] < nums[end]) {
                    if (target > nums[mid] && target <= nums[end]) {
                        start = mid;
                    } else {
                        end = mid;
                    }
                } else {
                    if (target >= nums[start] && target < nums[mid]) {
                        end = mid;
                    } else {
                        start = mid;
                    }
                }
            }
        }
    }

    if (nums[start] === target) {
        return start;
    }
    if (nums[end] === target) {
        return end;
    }
    return -1;
};