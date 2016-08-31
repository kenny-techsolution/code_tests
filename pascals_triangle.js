//https://leetcode.com/problems/pascals-triangle/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var triangle = [];
    var row = 1;
    var temp;
    while(row<=numRows) {
        if(row===1) {
            triangle.push([1]);
        } else if(row===2) {
            triangle.push([1,1]);
        } else {
            var newRow = [];
            newRow.push(1);
            for(var i=1;i<row-1;i++) {
               //console.log(triangle[row-2]);
               temp = triangle[row-2][i-1]+triangle[row-2][i];
               newRow.push(temp);
            }
            newRow.push(1);
            triangle.push(newRow);
        }
        row++;
    }
    return triangle;
};