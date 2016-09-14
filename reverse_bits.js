//https://leetcode.com/problems/reverse-bits/
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var binaryStr = (n >>> 0).toString(2);
    var chars = binaryStr.split("");
    var result;
    var numLeadingZeros = 32 - chars.length;

    while (numLeadingZeros > 0) {
        chars.unshift('0');
        numLeadingZeros--;
    }

    chars = chars.reverse();
    result = parseInt(chars.join(""), 2);
    return result;
};