//https://leetcode.com/problems/pascals-triangle-ii/
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var row;
    if (rowIndex === 0) {
        return [1];
    }
    if (rowIndex === 1) {
        return [1, 1];
    } else {
        row = [1, 1];
        for (var i = 1; i < rowIndex; i++) {
            //console.log("#"+i+"th row");
            row.unshift(1);
            //console.log(row);
            //console.log(rowIndex-1);
            for (var j = 1; j < row.length - 1; j++) {
                //console.log("pos:"+ j);
                row[j] = row[j] + row[j + 1];
                //console.log(row);
            }
        }
    }
    return row;
};