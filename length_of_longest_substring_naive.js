/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var answerString="";
    var compString="";
    var strArray= s.split("");
    answerString = strArray[0];
    if(strArray.length===0) {
        return 0;
    }
    if(strArray.length===1) {
    } else {
        //find non-repeat substring
        for (i=0;i<strArray.length;i++) {
          compString = "";
          if(i>s.length-answerString.length) {
              return answerString.length;
          }
          for (j=i;j<strArray.length;j++) {
                if(compString.length===0){
                    compString = strArray[j];
                    //console.log("1 "+ compString);
                } else {
                    if(compString.indexOf(strArray[j])===-1){
                        compString = compString.concat(strArray[j]);
                        //console.log("2 "+ compString);
                    } else {
                        //console.log("3 "+ compString);
                        break;
                    }
                    if(compString.length>answerString.length) {
                        answerString = compString;
                    }
                }
            }
        } 
    }
    //console.log(answerString);
    return answerString.length;
};