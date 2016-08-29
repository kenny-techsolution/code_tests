//https://leetcode.com/problems/valid-anagram/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    var tArray = t.split("");
    var sArray = s.split("");

    sArray = sArray.sort();
    tArray = tArray.sort();

    for (var i = 0; i < s.length; i++) {
        if (sArray[i] !== tArray[i]) {
            return false;
        }
    }
    return true;
};