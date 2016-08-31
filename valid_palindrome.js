//https://leetcode.com/problems/valid-palindrome/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
	s = s.toLowerCase();
	s = s.replace(/[^a-z0-9]/ig, "");
	var reversedStr = s.split("").reverse().join("");
	return (reversedStr === s);
};