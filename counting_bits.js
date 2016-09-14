//https://leetcode.com/problems/counting-bits/
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var answer = [];
    for (var i = 0; i <= num; i++) {
        //find bit for a integer
        var charArray = (i >>> 0).toString(2).split("");
        //console.log(charArray);
        charArray = charArray.sort().reverse();
        var count = 0;
        for (var j = 0; j < charArray.length; j++) {
            if (charArray[j] !== '1') {
                break;
            } else {
                count++;
            }
        }
        answer.push(count);
    }
    return answer;
};