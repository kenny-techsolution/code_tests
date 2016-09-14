//https://leetcode.com/problems/length-of-last-word/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
	var sArray = s.trim().split(" ");
	console.log(sArray);
	if (sArray.length === 0) {
		return 0;
	} else {
		return sArray[sArray.length - 1].length;
	}
};