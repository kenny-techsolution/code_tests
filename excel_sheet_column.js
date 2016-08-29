//https://leetcode.com/problems/excel-sheet-column-number/
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var digitsArray = s.split("");
    console.log(digitsArray);
    var digitPlace = 0;
    var answer = 0;
    var tempValue = 0;
    alphaArray = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    for (var i = digitsArray.length; i > 0; i--) {
        tempValue = (alphaArray.indexOf(digitsArray[i - 1])) * (Math.pow(26, digitPlace));
        answer += tempValue;
        digitPlace++;
    }
    return answer;
};