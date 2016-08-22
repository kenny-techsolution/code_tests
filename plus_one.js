//https://leetcode.com/problems/plus-one/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var carry = 1;
    var currentNumber = 0;
    var answer = [];
    for (var i = digits.length - 1; i > -1; i--) {
        currentNumber = digits[i] + carry;
        console.log(currentNumber);
        if (currentNumber === 10) {
            currentNumber %= 10;
            carry = 1;
        } else {
            carry = 0;
        }
        answer.unshift(currentNumber);
        currentNumber = 0;
        console.log(answer);

    }

    if (carry === 1) {
        answer.unshift(carry);
    }
    console.log(answer);
    return answer;
};