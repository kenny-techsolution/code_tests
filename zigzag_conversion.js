//https://leetcode.com/problems/zigzag-conversion/
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var strArray = s.split("");
    var increment = numRows + (numRows - 2);
    var answerStr = "";
    var exit = false;
    var appendCharRetrievedByIndex = function(index) {
        var exit = false;
        while (exit != true) {
            if (index < strArray.length) {
                answerStr += strArray[index];
                index += increment;
            } else {
                exit = true;
            }
        }
    };

    if (numRows === 1 || numRows === 0) {
        return answerStr = s;
    }
    for (i = 0; i < numRows; i++) {
        exit = false;
        if (i == 0) {
            //if first row
            appendCharRetrievedByIndex(0);
        } else if (i == numRows - 1) {
            //if last row
            appendCharRetrievedByIndex(i);
        } else {
            //if middle row
            var indexA = i;
            var indexB = numRows + (numRows - 2) - i;
            while (exit != true) {
                if (indexA < strArray.length) {
                    answerStr += strArray[indexA];
                    indexA += increment;
                } else {
                    exit = true;
                }
                if (indexB < strArray.length) {
                    answerStr += strArray[indexB];
                    indexB += increment;
                } else {
                    exit = true;
                }
            }
        }
    }
    return answerStr;
};