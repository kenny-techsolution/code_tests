//https://leetcode.com/problems/word-search/
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    
    function findSolution (x,y,remainedCount) {
        //check if a solution can be found.
        if(board[y][x] === word.charAt(word.length-remainedCount)&& board[y][x]!=="") {
            //console.log(board[y][x]);
            if(remainedCount === 1 ){
                //console.log("end");
                return true;
            }
            var temp = board[y][x];
            board[y][x]="";
            if(x>0 && findSolution(x-1,y,remainedCount-1)) {
                //console.log("west");
                return true;
            }
            if(y>0 && findSolution(x,y-1,remainedCount-1)) {
                //console.log("north");
                return true;
            }            
            if(x+1<board[0].length && findSolution(x+1,y,remainedCount-1)) {
                //console.log("east");
                return true;
            }
            if(y+1<board.length && findSolution(x,y+1,remainedCount-1)) {
                //console.log("south");
                return true;
            }
            board[y][x] = temp;
            return false;
        }
        return false;
    } 

    for(var i=0;i<board.length;i++) {
        for(var j=0;j<board[i].length;j++) {
            if(findSolution(j,i,word.length)===true) {
                return true;
            }
        }
    }
    return false;
    

};