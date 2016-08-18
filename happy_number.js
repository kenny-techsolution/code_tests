//https://leetcode.com/problems/happy-number/
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var charArray = String(n).split("");
    //summing loop
    var tempArray = [];
    var tempVal = 0;
    var i = 0;
    var numberSet = new Set();
    while (!(charArray.length == 1 && charArray[0] == "1")) {
        tempVal = 0;
        for (j = 0; j < charArray.length; j++) {
            tempVal += Math.pow(Number(charArray[j]), 2);
        }
        charArray = String(tempVal).split("");

        //if the same number shows up again, we know we enter an endless cycle.
        if (numberSet.has(tempVal) !== true) {
            numberSet.add(tempVal);
        } else {
            return false;
        }
        //console.log(charArray.join(""));
        i++;
    }
    return true;
};