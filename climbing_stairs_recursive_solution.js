//https://leetcode.com/problems/climbing-stairs/
/**
 * @param {number} n
 * @return {number}
 */
//fibonachi sequence.
//f(n) = f(n-1)+f(n-2)
var climbStairs = function(n) {
	if (n === 0) {
		return 0;
	} else if (n === 1) {
		return 1;
	} else if (n === 2) {
		return 2;
	} else {
		return climbStairs(n - 1) + climbStairs(n - 2);
	}
};