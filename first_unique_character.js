//https://leetcode.com/problems/first-unique-character-in-a-string/
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

    if (s.length === 0) {
        return -1;
    }
    if (s.length === 1) {
        return 0;
    }

    var baseChar = "";
    var unique = true;
    var scanned = [];
    for (var i = 0; i < s.length; i++) {
        unique = true;
        baseChar = s.charAt(i);
        if (scanned.indexOf(baseChar) > -1) {
            continue;
        }
        for (var j = i + 1; j < s.length; j++) {
            if (baseChar === s.charAt(j)) {
                unique = false;
                scanned.push(baseChar);
                break;
            }
        }

        if (unique === true) {
            return i;
        }
    }
    return -1;
};