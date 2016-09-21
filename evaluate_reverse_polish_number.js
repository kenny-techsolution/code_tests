//https://leetcode.com/problems/evaluate-reverse-polish-notation/
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    var stack = [];
    var operators = ["+", "-", "*", "/"];
    while (tokens.length > 0) {
        var t = tokens.shift();
        if (operators.indexOf(t) === -1) {
            stack.push(t);
        } else {
            var opB = Number(stack.pop());
            var opA = Number(stack.pop());
            if (t === "*") {
                stack.push(opA * opB);
            }
            if (t === "/") {
                //pay attention to use Math.trunc, Math.floor will give wrong result if it's negative number.
                stack.push(Math.trunc(opA / opB));
            }
            if (t === "-") {
                stack.push(opA - opB);
            }
            if (t === "+") {
                stack.push(opA + opB);
            }
        }
    }
    return Number(stack[0]);

};