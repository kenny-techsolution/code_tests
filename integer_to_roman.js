//https://leetcode.com/problems/integer-to-roman/
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    if (num === 0 || !(num < 4000 && num > 0)) {
        return false;
    }
    var numStr = num.toString();
    var charArray = numStr.split("");
    charArray = charArray.reverse();
    var answerArray = [];
    var thousandMap = ["M", "MM", "MMM"];
    var hundredMap = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var tensMap = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var onesMap = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    for (i = 0; i < charArray.length; i++) {
        if (i === 0) {
            //ones    
            answerArray.push(onesMap[Number(charArray[i]) - 1]);
        } else if (i === 1) {
            //tens    
            answerArray.push(tensMap[Number(charArray[i]) - 1]);
        } else if (i === 2) {
            //hundreds    
            answerArray.push(hundredMap[Number(charArray[i]) - 1]);
        } else if (i === 3) {
            //thousands
            answerArray.push(thousandMap[Number(charArray[i]) - 1]);
        }
    }
    return answerArray.reverse().join("");
};