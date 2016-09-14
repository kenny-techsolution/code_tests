//https://leetcode.com/problems/power-of-two/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n>0 && ((n&(~n+1))===n)) {
        return true;
    } else {
        return false;
    }
};