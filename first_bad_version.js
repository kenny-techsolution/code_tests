//https://leetcode.com/problems/first-bad-version/
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
     //use divide and conquer, find the mid, compare, reset max and min until convergence. 
    return function(n) {
        var max = n;
        var min = 0;
        var mid;
        while(max!==(min+1)) {
            mid = min + Math.floor((max-min)/2);
            if(isBadVersion(mid)===true) {
                max = mid;
            } else {
                min = mid;
            }
        }
        return max;
    };
    /* naive solution, doesn't work. called API too many times. 
     return function(n) {
       var badVersion=n;
       while(n>=1){
           if(isBadVersion(n)===true) {
               badVersion = n;
           } else {
               return badVersion;
           }
           n--;
       }
       return badVersion;
    };
    */
};