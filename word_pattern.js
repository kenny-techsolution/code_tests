//https://leetcode.com/problems/word-pattern/
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var strArray = str.split(" ");
    var patternMap = {};
    var strMap = {};

    if (strArray.length !== pattern.length) {
        return false;
    }

    var result = true;
    for (var i in pattern) {
        console.log("pattern:" + pattern[i]);
        //if the patternType exist in the patternMap, retrieve the str to match
        //if the patternType does not exist in the patternMap, create one if strMap can't find a pattern type with the corresponding str.
        if (patternMap[pattern[i]] !== undefined) {
            //pattern exist
            if (patternMap[pattern[i]] === strArray[i]) {
                continue;
            } else {
                return false;
            }
        } else {
            //pattern didn't exist
            if (strMap[strArray[i]] === undefined) {
                strMap[strArray[i]] = pattern[i];
                patternMap[pattern[i]] = strArray[i];
            } else {
                return false;
            }
        }
    }
    return result;
};