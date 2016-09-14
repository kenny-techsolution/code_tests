//https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var charArray = s.split("");
    var tempStack = [];
    for (i = 0; i < charArray.length; i++) {
        console.log(tempStack);
        if (charArray[i] === "(" || charArray[i] === "[" || charArray[i] === "{") {
            tempStack.push(charArray[i]);
        } else {
            if (tempStack[tempStack.length - 1] === "(" && charArray[i] === ")") {
                tempStack.pop();
            } else if (tempStack[tempStack.length - 1] === "[" && charArray[i] === "]") {
                tempStack.pop();
            } else if (tempStack[tempStack.length - 1] === "{" && charArray[i] === "}") {
                tempStack.pop();
            }
        }
    }
    if (tempStack.length === 0) {
        return true;
    } else {
        return false;
    }

};