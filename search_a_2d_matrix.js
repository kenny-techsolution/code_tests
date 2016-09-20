//https://leetcode.com/problems/search-a-2d-matrix/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 1) {
        if (matrix[0].indexOf(target) !== -1) {
            return true;
        }
    } else {
        for (var i = 0; i < matrix.length; i++) {
            if (target < matrix[i][0]) {
                if (i === 0) {
                    return false;
                }
                var currentArray = matrix[i - 1];
                //less than the second row's first num, then search the first row. 
                if (currentArray.indexOf(target) !== -1) {
                    return true;
                }
            } else if (target === matrix[i][0]) {
                //if matching the row's first num. 
                return true;
            } else if (target > matrix[i][0] && i === matrix.length - 1) {
                //if matching the num in the last row.
                if (matrix[i].indexOf(target) !== -1) {
                    return true;
                }
            }
        }
    }
    return false;
};