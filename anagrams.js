//https://leetcode.com/problems/anagrams/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var hash = {};
    var answer = [];
    for (var index in strs) {
        var key = strs[index].split("").sort().join("");

        if (hash[key] === undefined) {
            hash[key] = [strs[index]];
        } else {
            hash[key].push(strs[index]);
        }
    }
    for (var group in hash) {
        answer.push(hash[group]);
    }
    return answer;
};