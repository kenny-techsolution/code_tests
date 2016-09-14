//https://leetcode.com/problems/find-the-difference/
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
	sArray = s.split("").sort();
	tArray = t.split("").sort();

	for (var i = 0; i < sArray.length; i++) {
		if (sArray[i] !== tArray[i]) {
			return tArray[i];
		}
	}
	return tArray[tArray.length - 1];
};