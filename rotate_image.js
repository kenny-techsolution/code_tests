//https://leetcode.com/problems/rotate-image/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var n = matrix.length;
    for (var y = 0; y < Math.floor(n / 2); y++) {
        for (var x = y; x < matrix[0].length - y - 1; x++) {
            var temp = matrix[n - x - 1][y];
            matrix[n - x - 1][y] = matrix[n - y - 1][n - x - 1];
            matrix[n - y - 1][n - x - 1] = matrix[x][n - 1 - y];
            matrix[x][n - 1 - y] = matrix[y][x];
            matrix[y][x] = temp;
        }
    }
};