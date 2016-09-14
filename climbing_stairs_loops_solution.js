//https://leetcode.com/problems/climbing-stairs/
/**
 * @param {number} n
 * @return {number}
 */
//fibonachi sequence.
//f(n) = f(n-1)+f(n-2)
// n=1 : 1
// n=2 : 2
// n=3 : 2+1=3
// n=4 : 3+2=5
// n=5 : 5+3=8
var climbStairs = function(n) {
    if (n <= 1) {
        return 1;
    }
    var current = 1;
    var previous = 1;
    for (var i = 2; i <= n; i++) {
        temp = current;
        current = current + previous;
        previous = temp;
    }
    return current;
};