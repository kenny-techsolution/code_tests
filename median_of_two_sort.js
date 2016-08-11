//https://leetcode.com/problems/median-of-two-sorted-arrays/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    //1. divide array to half
    //2. sort each side
    //3. merge both side.
    var combinedNumbs = nums1.concat(nums2);
    var middleIndex = 0;
    var median = 0;

    function merge(leftArray, rightArray) {
        var count = leftArray.length + rightArray.length;
        var mergedArray = [];
        for (i = 0; i < count; i++) {
            if (leftArray.length === 0) {
                mergedArray = mergedArray.concat(rightArray);
                rightArray = [];
            } else if (rightArray.length === 0) {
                mergedArray = mergedArray.concat(leftArray);
                leftArray = [];
            } else if (leftArray[0] < rightArray[0]) {
                mergedArray.push(leftArray.shift());
            } else {
                mergedArray.push(rightArray.shift());
            }
        }
        return mergedArray;
    }

    function mergeSort(inputArray) {
        if (inputArray.length === 1) {
            return inputArray;
        }
        var middleIndex = Math.floor(inputArray.length / 2);
        var leftArray = inputArray.slice(0, middleIndex);
        var rightArray = inputArray.slice(middleIndex, inputArray.length);
        leftArray = mergeSort(leftArray);
        rightArray = mergeSort(rightArray);
        return merge(leftArray, rightArray);
    }

    combinedNumbs = mergeSort(combinedNumbs);
    medianIndex = Math.floor(combinedNumbs.length / 2);
    median = combinedNumbs[medianIndex];
    if (combinedNumbs.length % 2 === 0) {
        median = (combinedNumbs[medianIndex] + combinedNumbs[medianIndex - 1]) / 2;
    } else {
        median = combinedNumbs[medianIndex];
    }
    return median;
};