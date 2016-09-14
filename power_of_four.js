//https://leetcode.com/problems/power-of-four/
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {

    while (num > 3) {
        if (num % 4 === 0) {
            num = num / 4;
        } else {
            return false;
        }
    }
    if (num === 1) {
        return true;
    } else {
        return false;
    }
};