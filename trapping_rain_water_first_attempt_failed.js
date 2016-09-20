//https://leetcode.com/problems/trapping-rain-water/
/**
 * @param {number[]} height
 * @return {number}
 */
//find local maximum. which is higher than the neighbor bar. 
var trap = function(height) {
    var left = 0;
    var areaH = 0;
    var preH = 0;
    var curretH = 0;
    var stack = [];
    var water = 0;
    var answer = 0;

    while (left < height.length) {
        //is peak?
        currentH = height[left];
        var isFirstPeak = left === 0 && currentH > 0;
        var isLastPeak = left === height.length - 1 && height[left - 1] < currentH;
        var isMiddlePeak = left > 0 && left < height.length - 1 && height[left - 1] < currentH && height[left + 1] < currentH;

        if (isFirstPeak || isLastPeak || isMiddlePeak) {
            if (preH === 0) {
                preH = currentH;
            } else {
                areaH = Math.min(preH, currentH);
                preH = currentH;
                //calculate water area with stack
                while (stack.length > 0) {
                    var depth = stack.pop();
                    depth = areaH - depth;
                    //be careful, only postive can be summed. 
                    if (depth > 0) {
                        water += depth;
                    }

                }
                answer += water;
                water = 0;
            }
        } else if (preH !== 0) {
            stack.push(currentH);
        }

        left++;
    }
    return answer;
};