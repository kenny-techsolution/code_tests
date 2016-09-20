//https://leetcode.com/problems/trapping-rain-water/
/**
 * @param {number[]} height
 * @return {number}
 */
//find local maximum. which is higher than the neighbor bar. 
var trap = function(height) {
    var stack = [];
    var preH = 0;
    var firstPeak = false;
    var water = 0;
    var left = 0;
    var preIndex = 0;
    while (left < height.length) {
        var currentH = height[left];
        //first peak
        if (currentH > 0 && firstPeak === false) {
            preH = currentH;
            preIndex = left;
            firstPeak = true;
        } else {
            if (currentH >= preH) {
                while (stack.length > 0) {
                    var depth = stack.pop();
                    depth = preH - depth;
                    water += depth;
                }
                preH = currentH;
                preIndex = left;
            } else {
                stack.push(currentH);
            }
        }
        left++;
    }
    left--;
    //handle the remaining stack elements. 
    while (stack.length > 0) {
        while (stack.length > 1 && height[left] < height[left - 1]) {
            stack.pop();
            left--;
        }
        areaH = height[left];
        while (stack.length > 0 && height[left] <= areaH) {
            var temp = stack.pop();
            water += areaH - temp;
            left--;
        }
    }
    return water;

};