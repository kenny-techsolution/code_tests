//https://leetcode.com/problems/compare-version-numbers/
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    var vArray1 = version1.split(".");
    var vArray2 = version2.split(".");
    var longestLength = (vArray1.length > vArray2.length) ? vArray1.length : vArray2.length;
    var temp1 = 0;
    var temp2 = 0;

    for (var i = 0; i < longestLength; i++) {
        temp1 = (vArray1[i] === undefined) ? 0 : Number(vArray1[i]);
        temp2 = (vArray2[i] === undefined) ? 0 : Number(vArray2[i]);
        if (temp1 > temp2) {
            return 1;
        } else if (temp1 < temp2) {
            return -1;
        } else {}
    }
    return 0;

};