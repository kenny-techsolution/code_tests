//https://leetcode.com/problems/longest-absolute-file-path/
/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
    var parts = input.split("\n");
    var stack = [];
    var depth = 0;
    var file = 0;
    var answerStack = [];
    for(var i=0;i<parts.length;i++){
        //handling tab and spaces
        var part = parts[i];
        var tabLimit = stack.length;
        //process part and modify part
        var tabCount = 0;
        var temPart = "";
        while(tabCount !== tabLimit) {
            temPart = part.replace("\t","");
            if(temPart !== part) {
                part = temPart;
                tabCount++;
            } else {
                temPart = part.replace("    ","");
                if(temPart!==part) {
                    part = temPart;
                    tabCount++;
                } else {
                    break;
                }
            }
        }
        depth = tabCount;
        file =  parts[i].indexOf(".");
        var currentDepth = stack.length -1;

        if(stack.length === 0) {
            stack.push(part);
        } else {
            if(depth > currentDepth) {
                stack.push(part);
            } else if(depth < currentDepth) {
                var numPop = currentDepth - depth+1;
                for(var j=0;j<numPop;j++) {
                    stack.pop();
                }
                stack.push(part);
            } else if(depth===currentDepth) {
                stack.pop();
                stack.push(part);
            } 
        }
        
        if(file>-1) {
            //if it's file. then. compare the length with the existing answerStack. 
            if(stack.join("/").length > answerStack.join("/").length) {
                answerStack = stack.slice();
                stack.pop();
            } else {                
            }
        }
    }
    
    if(answerStack.length ===0) {
        return 0;
    } else if(answerStack[answerStack.length-1].indexOf(".") === -1){
        return 0;        
    } else {
        return answerStack.join("/").length;        
    }
};