//https://leetcode.com/problems/sum-of-two-integers/
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    if (b === 0) {
        return a;
    }
    if (a === 0) {
        return b;
    }
    //repeat until b is 0. all is added to a.
    while (b !== 0) {
        var carry = a & b; // carry
        a = a ^ b; //add without carry.
        b = carry << 1; //shift to the right digit
    }
    return a;
};