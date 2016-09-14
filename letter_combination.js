//https://leetcode.com/problems/letter-combinations-of-a-phone-number/
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var digitCharArray = digits.split('');
    var numsPermutation = 1;
    var answerArray = [];
    var numsMap = {
        "1": ["*"],
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    };
    if (digitCharArray.length === 0) {
        return [];
    }
    //figure out the total permutation.
    for (i = 0; i < digitCharArray.length; i++) {
        numsPermutation = numsPermutation * numsMap[digitCharArray[i]].length;
    }
    //generate empty array that holds all possible permutation.
    for (i = 0; i < numsPermutation; i++) {
        answerArray.push("");
    }
    var repeater;
    var currentIndex = 0;
    var m = 0;
    //loop through all the combo.
    //render permutation for the first bit, then second, then on.
    digitCharArray = digitCharArray.reverse();
    for (i = 0; i < digitCharArray.length; i++) {
        if (i === 0) {
            repeater = 1;
        } else {
            repeater = repeater * numsMap[digitCharArray[i - 1]].length;
        }
        m = 0;
        j = 0;
        //render the digit letter to each permutation unit for that particular digit. 
        while (m < answerArray.length) {
            var digitLettersNums = numsMap[digitCharArray[i]].length;
            if (j === digitLettersNums - 1) {
                for (k = 0; k < repeater; k++) {
                    answerArray[m] = numsMap[digitCharArray[i]][j] + answerArray[m];
                    m++;
                }
                j = 0;
            } else {
                for (k = 0; k < repeater; k++) {
                    answerArray[m] = numsMap[digitCharArray[i]][j] + answerArray[m];
                    m++;
                }
                j++;
            }
        }
    }
    return answerArray;
};