//https://leetcode.com/problems/reverse-vowels-of-a-string/
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    //take the vows in to an array;
    var vowsArray = [];
    var sArray = s.split("");
    for (var i = 0; i < sArray.length; i++) {
        if (["i", "e", "a", "o", "u"].indexOf(sArray[i].toLowerCase()) > -1) {
            vowsArray.push(sArray[i]);
            sArray[i] = "";
        }
    }

    for (var j = 0; j < sArray.length; j++) {
        if (sArray[j] === "") {

            sArray[j] = vowsArray.pop();
        }
    }
    return sArray.join("");
};