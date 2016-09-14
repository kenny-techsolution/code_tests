//https://leetcode.com/problems/decode-string/
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    //number, when see the first bracket, put on stack
    var digits = [];
    var strings = [];
    var temp_digit = '';
    var temp_string = '';
    var digit = 0;
    var resultStr = '';
    for (var i = 0; i < s.length; i++) {
        var char = s.charAt(i);
        if (isNaN(char) !== true) {
            temp_digit += char;

        } else if (s.charAt(i) === "[") {
            if (temp_string !== "") {
                strings.push(temp_string);
            }
            strings.push("[");
            digits.push(Number(temp_digit));
            temp_digit = '';
            temp_string = '';

        } else if (s.charAt(i) === "]") {
            var calculatedStr = "";
            if (temp_string !== "") {
                if (strings[strings.length - 1] !== "[") {
                    strings[strings.length - 1] += temp_string;
                } else {
                    strings.push(temp_string);
                }
                temp_string = '';
            }
            digit = digits.pop();
            resultStr = strings.pop();
            //pop "["
            strings.pop();

            //multiply the string with multiplier
            calculatedStr = '';
            for (var j = 0; j < digit; j++) {
                calculatedStr += resultStr;
            }
            if (strings.length === 0 || strings[strings.length - 1] === "[") {
                strings.push(calculatedStr);
            } else {
                strings[strings.length - 1] += calculatedStr;
            }
            resultStr = '';
        } else {
            temp_string += char;
        }
    }
    if (temp_string !== '') {
        strings.push(temp_string);
    }
    return strings.join("");
};