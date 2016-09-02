//https://leetcode.com/problems/excel-sheet-column-title/
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var remainder = 0;
    var answerArray = [];
    var answerStr = "";
    var alphaArray = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    while (n > 26) {
        remainder = (n - 1) % 26;
        answerArray.push(remainder + 1);
        n = Math.floor((n - 1) / 26);
    }
    remainder = (n - 1) % 26;
    answerArray.push(remainder + 1);
    answerArray = answerArray.reverse();
    //console.log(answerArray);
    for (var i = 0; i < answerArray.length; i++) {
        answerStr += alphaArray[answerArray[i]];
    }
    return answerStr;
};