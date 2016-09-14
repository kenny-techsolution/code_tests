//https://leetcode.com/problems/add-binary/
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var counter = (a.length > b.length) ? a.length : b.length;
    var charA = a.split("");
    var charB = b.split("");
    var carry = 0;
    var result = 0;
    var answerArray = [];
    for (var i = counter - 1; i > -1; i--) {
        numA = (charA[i] !== undefined) ? Number(charA[i]) : 0;
        numB = (charB[i] !== undefined) ? Number(charB[i]) : 0;

        numA = (charA.length > 0) ? Number(charA.pop()) : 0;
        numB = (charB.length > 0) ? Number(charB.pop()) : 0;

        result = 0;
        result = numA + numB + carry;
        if (result >= 2) {
            result %= 2;
            carry = 1;
        } else {
            carry = 0;
        }
        answerArray.unshift(result);
    }

    if (carry === 1) {
        answerArray.unshift(carry);
    }
    return answerArray.join("");
};