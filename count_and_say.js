//https://leetcode.com/problems/count-and-say/
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var answer = "1";
    var temp = "";
    for (i = 1; i < n; i++) {
        temp = answer;
        answer = "";
        var tempChar = "";
        var charCount = 0;
        //console.log(temp);
        for (j = 0; j < temp.length; j++) {
            if (temp.charAt(j) !== tempChar) {
                if (charCount > 0) {
                    answer += charCount + tempChar;
                }
                charCount = 1;
                tempChar = temp.charAt(j);
            } else {
                charCount++;
            }
            if (j === temp.length - 1) {
                if (temp.charAt(j) === tempChar) {
                    answer += charCount + tempChar;
                }
                break;
            }
        }
        //console.log(answer);
    }
    return answer;
};