//https://leetcode.com/problems/power-of-three/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    while (n > 2) {
        if (n % 3 === 0) {
            n = n / 3;
        } else {
            return false;
        }
    }
    if (n === 1) {
        return true;
    } else {
        return false;
    }

};