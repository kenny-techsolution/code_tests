//https://leetcode.com/problems/reverse-integer/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var numStr = x.toString();
    var charArray = numStr.split("");
    //check for negative number
    var isNegative = false;
    if (charArray[0] == "-") {
        charArray.shift();
        isNegative = true;
    }
    charArray.reverse();
    if (isNegative === true) {
        charArray.unshift("-");
    }
    console.log(charArray.join(""));
    //var charArray = charArray.reverse();
    //charArray
    var resultNum = Number(charArray.join(""));
    if (resultNum < -2147483648 || resultNum > 2147483647) {
        resultNum = 0;
    }
    return resultNum;
};