//https://leetcode.com/problems/top-k-frequent-elements/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var wcMap = {};
    var comp = function(a, b) {
        return a.freq - b.freq;
    };

    //hash
    for (var i = 0; i < nums.length; i++) {
        if (wcMap[nums[i]] === undefined) {
            wcMap[nums[i]] = 1;
        } else {
            wcMap[nums[i]]++;
        }
    }
    //console.log(wcMap);

    //make array
    var mcArray = [];
    for (var key in wcMap) {
        var wcObject = {
            nums: key,
            freq: wcMap[key]
        };
        mcArray.push(wcObject);
    }


    mcArray = mcArray.sort(comp);
    var answer = [];
    for (var j = 0; j < k; j++) {
        answer.push(Number(mcArray.pop().nums));
    }
    return answer;

};