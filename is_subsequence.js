//https://leetcode.com/problems/is-subsequence/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s === null || s.length === 0) {
        return true;
    }
    if (t === null || t.length === 0) {
        return false;
    }
    var char;
    var index = -1;
    var pos = 0;
    var found = true;
    for (var i = 0; i < s.length; i++) {
        char = s.charAt(i);
        //see if the char can be found in t. and set index to be that pos.
        while (pos < t.length) {
            if (t.charAt(pos) === char && pos > index) {
                index = pos;
                break;
            }
            if (pos === t.length - 1) {
                return false;
            }
            pos++;
        }
    }
    return true;
};