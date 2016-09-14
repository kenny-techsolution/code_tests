//https://leetcode.com/problems/isomorphic-strings/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var sStrArray = s.split("");
    var tStrArry = t.split("");
    var sMap = {};
    var tMap = {};

    if (sStrArray.length !== tStrArry.length) {
        return false;
    }

    var result = true;
    for (var i in sStrArray) {
        //console.log("pattern:" + sMap[i]);
        //if the patternType exist in the patternMap, retrieve the str to match
        //if the patternType does not exist in the patternMap, create one if strMap can't find a pattern type with the corresponding str.
        if (sMap[sStrArray[i]] !== undefined) {
            //pattern exist
            if (sMap[sStrArray[i]] === tStrArry[i]) {
                continue;
            } else {
                return false;
            }
        } else {
            //pattern didn't exist
            if (tMap[tStrArry[i]] === undefined) {
                tMap[tStrArry[i]] = sStrArray[i];
                sMap[sStrArray[i]] = tStrArry[i];
            } else {
                return false;
            }
        }
    }
    return result;
};