//https://leetcode.com/problems/add-digits/
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
	var answer = 1 + ((num - 1) % 9);
	return answer;
};