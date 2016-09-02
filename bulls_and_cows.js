//https://leetcode.com/problems/bulls-and-cows/
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var bulls = 0;
    var cows = 0;
    var secretArray = secret.split("");
    var guessArray = guess.split("");
    for (var i = 0; i < secret.length; i++) {
        if (secretArray[i] === guessArray[i]) {
            bulls++;
            secretArray[i] = "";
            guessArray[i] = "";
        }
    }
    for (var j = 0; j < secretArray.length; j++) {
        if (secretArray[j] === "") {
            continue;
        }
        var pos = guessArray.indexOf(secretArray[j]);
        if (pos > -1) {
            cows++;
            guessArray[pos] = "";
        }
    }
    return (bulls + "A" + cows + "B");
};