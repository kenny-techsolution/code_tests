//https://leetcode.com/problems/factorial-trailing-zeroes/
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    if (n < 5) {
        return 0;
    }
    var numsOf5 = 0;
    while (n >= 5) {
        console.log(n);
        numsOf5 += Math.floor(n / 5);
        n = Math.floor(n / 5);
    }
    return numsOf5;
};
/*naive implementation, doesn't work for large numbers.
var trailingZeroes = function(n) {
    if(n===0) {
        return 0;
    }
    var current = n;
    n--;
    while(n>0){
        current*=n; 
        n--;
    }
    
    
    var nStr = current.toString(10);
    var nCharArray = nStr.split("");
    var numsZero = 0;
    for(var i=nCharArray.length;i>0;i--){
        var temp = nCharArray.pop();
        if(temp === "0"){
            numsZero++;
        } else {
            return numsZero;
        }
    }
    return numsZero;
};
*/