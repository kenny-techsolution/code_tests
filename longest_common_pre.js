//https://leetcode.com/problems/longest-common-prefix/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var sameChar = false;
    var tempChar = "";
    var answerStr = "";

    if (strs.length === 0) {
        return "";
    }
    //find the shortest str length.
    var min = strs[0].length;

    for (i = 1; i < strs.length; i++) {
        if (strs[i].length < min) {
            min = strs[i].length;
        }
    }

    //run through each character position up until the end of the shortest string
    for (i = 0; i < min; i++) {
        tempChar = strs[0].charAt(i);
        console.log(tempChar);
        //compare to see if all char at that position are the same.
        for (j = 1; j < strs.length; j++) {
            if (tempChar !== strs[j].charAt(i)) {
                return answerStr;
            }
        }
        answerStr += tempChar;
    }
    return answerStr;
};