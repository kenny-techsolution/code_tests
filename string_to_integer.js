//https://leetcode.com/problems/string-to-integer-atoi/
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    //the input can have space. which 
    var charArray = str.trim().split("");
    var char = "";
    var resultStr = "";
    var numberStr = "0123456789";
    var resultNum = 0;
    for (i = 0; i < charArray.length; i++) {
        char = charArray[i];
        if (i === 0 && char === "-") {
            resultStr += char;
        } else if (i === 0 && char === "+") {
            resultStr += "";
        } else if (numberStr.indexOf(char) != -1) {
            resultStr += char;
        } else {
            break;
        }
    }
    //error checking
    resultNum = Number(resultStr);
    if (resultStr === "" || resultStr === "-") {
        return 0;
    } else if (resultNum === 0) {
        return 0;
    } else if (resultNum < -2147483648) {
        return -2147483648;
    } else if (resultNum > 2147483647) {
        return 2147483647;
    } else {
        return resultNum;
    }
};