//https://leetcode.com/problems/powx-n/
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 1) {
        return x;
    }
    var half = Math.pow(x, Math.floor(Math.abs(n) / 2));

    if (n % 2 === 0) {
        res = half * half;
    } else {
        res = x * half * half;
    }
    return (n < 0) ? (1 / res) : res;
};