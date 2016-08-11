//https://leetcode.com/problems/palindrome-number/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var charArray = x.toString().split("");
    var i = 0;
    var j = charArray.length - 1;
    var answerBoolean = true;
    while (i <= j) {
        if (charArray[i] !== charArray[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};