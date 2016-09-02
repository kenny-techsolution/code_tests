//https://leetcode.com/problems/reverse-words-in-a-string/
/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    str = str.trim();

    if (str === "") {
        return str;
    }
    var finalArray = []
    var strArray = str.split(" ");
    strArray = strArray.reverse();
    for (var i = 0; i < strArray.length; i++) {
        strArray[i] = strArray[i].trim();
        if (strArray[i] !== " " && strArray[i] !== "") {
            finalArray.push(strArray[i]);
        }
    }
    return finalArray.join(" ");
};