//https://leetcode.com/problems/number-of-1-bits/
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
//  (n>>>0) coerces its arguments to unsigned integers
var hammingWeight = function(n) {
	var binaryChars = (n >>> 0).toString(2).split("");
	var hammeringWeight = 0;

	for (var i = 0; i < binaryChars.length; i++) {
		if (binaryChars[i] === "1") {
			hammeringWeight++;
		}
	}
	return hammeringWeight;
};