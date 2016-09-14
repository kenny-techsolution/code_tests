//https://leetcode.com/problems/number-of-islands/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    //edge cases
    if (grid.length === 0 || grid[0].length === 0) {
        return 0;
    }
    //search each cell in the grid. skip the one that has been visited.
    //search til its boundry. and update the cell that has been visited.
    var numLslands = 0;
    var dx = [0, 0, +1, -1];
    var dy = [+1, -1, 0, 0];

    function inBound(x, y) {
        return (x < grid[0].length && x >= 0 && y < grid.length && y >= 0) ? true : false;
    }

    function dfs(grid, x, y) {
        if (inBound(x, y) === false) {
            return;
        }
        if (grid[y][x] === "1") {
            grid[y][x] = "0";
            for (var i = 0; i < 4; i++) {
                dfs(grid, x + dx[i], y + dy[i]);
            }
        }
    }

    for (var y = 0; y < grid.length; y++) {
        for (var x = 0; x < grid[0].length; x++) {
            if (grid[y][x] === "1") {
                numLslands++;
                dfs(grid, x, y);
            }
        }
    }

    return numLslands;
};