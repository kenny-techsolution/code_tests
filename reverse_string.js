//https://leetcode.com/problems/reverse-string/
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
	var charArray = s.split("");
	charArray = charArray.reverse();
	return charArray.join("");
};