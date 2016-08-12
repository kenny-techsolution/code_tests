//https://leetcode.com/problems/roman-to-integer/
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  //check first charactor.
  var charArray = s.toUpperCase().split("");
  var thousandSymbol = "M";
  var hundredSymbol = ["C", "D", "M"];
  var tensSymbol = ["X", "L"];
  var onesSymbol = ["I", "V"];
  var thousandStr = "";
  var hundredStr = "";
  var tensStr = "";
  var onesStr = "";
  var thousandMap = {
    "M": 1000,
    "MM": 2000,
    "MMM": 3000
  };
  var hundredMap = {
    "C": 100,
    "CC": 200,
    "CCC": 300,
    "CD": 400,
    "D": 500,
    "DC": 600,
    "DCC": 700,
    "DCCC": 800,
    "CM": 900
  };

  var tensMap = {
    "X": 10,
    "XX": 20,
    "XXX": 30,
    "XL": 40,
    "L": 50,
    "LX": 60,
    "LXX": 70,
    "LXXX": 80,
    "XC": 90
  };

  var onesMap = {
    "I": 1,
    "II": 2,
    "III": 3,
    "IV": 4,
    "V": 5,
    "VI": 6,
    "VII": 7,
    "VIII": 8,
    "IX": 9
  };


  for (i = 0; i < charArray.length; i++) {
    var char = charArray[i];
    if (char === "M") {
      //thousand, or it's 900 CM
      if (i !== 0 && charArray[i - 1] == "C") {
        hundredStr += char;
      } else {
        thousandStr += char;
      }
    } else if (["C", "D"].indexOf(char) !== -1) {
      //it's hundred or it's 90 XC
      if (i !== 0 && charArray[i - 1] == "X") {
        tensStr += char;
      } else {
        hundredStr += char;
      }
    } else if (["X", "L"].indexOf(char) !== -1) {
      if (i !== 0 && charArray[i - 1] == "I") {
        onesStr += char;
      } else {
        tensStr += char;
      }
    } else if (["I", "V"].indexOf(char) !== -1) {
      onesStr += char;
    } else {
      return false;
    }
  }
  var thousand = (thousandStr.length > 0) ? thousandMap[thousandStr] : 0;
  var hundred = (hundredStr.length > 0) ? hundredMap[hundredStr] : 0;
  var tens = (tensStr.length > 0) ? tensMap[tensStr] : 0;
  var ones = (onesStr.length > 0) ? onesMap[onesStr] : 0;
  var answer = thousand + hundred + tens + ones;
  console.log(answer);
  return answer;
};