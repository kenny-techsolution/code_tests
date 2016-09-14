//https://leetcode.com/problems/generate-parentheses/
/**
 * @param {number} n
 * @return {string[]}
 */

//two constraints
//1.number of left and right parenthesis must be the same.
//2.there can't be more right parenth than left parenth in the string building process.
var generateParenthesis = function(n) {
    var answer = [];

    function generate(left, right, str) {
        if (left > right) {
            return;
        }
        if (left === 0 && right === 0) {
            answer.push(str);
            return;
        }

        if (left > 0) {
            generate(left - 1, right, str + "(");
        }
        if (right > 0) {
            generate(left, right - 1, str + ")");
        }
    }
    generate(n, n, "");
    return answer;
};