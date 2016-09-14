//https://leetcode.com/problems/intersection-of-two-arrays/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var smallerArray = (nums1.length > nums2.length) ? nums2 : nums1;
    var largerArray = (nums1.length > nums2.length) ? nums1 : nums2;
    var j = 0;
    var answer = [];
    smallerArray = smallerArray.sort(function(a, b) {
        return a - b;
    });
    largerArray = largerArray.sort(function(a, b) {
        return a - b;
    });
    for (var i = 0; i < smallerArray.length; i++) {
        //find match in largerArray
        // if there is a match increment for i and j.

        //if the next number is the same as the last one, skip to the next one.
        if (smallerArray[i] === answer[answer.length - 1]) {
            continue;
        }
        while (smallerArray[i] > largerArray[j]) {
            if (j === (largerArray.length - 1)) {
                return answer;
            }
            j++;
        }
        //if there is a match
        if (smallerArray[i] === largerArray[j]) {
            answer.push(smallerArray[i]);
            j++;
        }
    }
    return answer;
};