//https://leetcode.com/problems/valid-sudoku/
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var matrix = [];
    
    //construct array from taking colums and rows. 
    for(var i=0;i<9;i++){
        var array = [];
        var array2 = [];
        for(var j=0;j<9;j++) {
            array.push(board[j][i]);
            array2.push(board[i][j]);
        }
        matrix.push(array);
        matrix.push(array2);
    }
    //construct array for each box
    for(var k=0;k<9;k++){
        var hOffSet = (k%3)*3;
        var vOffSet = Math.floor(k/3)*3;
        var array3= [];
        //console.log(vOffSet+" , "+ hOffSet);
        for(var m=0;m<9;m++) {
            //console.log((Math.floor(m/3)+vOffSet)+","+ (m%3+hOffSet));
            array3.push(board[Math.floor(m/3)+vOffSet][m%3+hOffSet]);
        }
        matrix.push(array3);
    }
    
    //find repeat;
    function hasRepeat(sArray){
        var map = [];
        for(var i=0;i<sArray.length;i++){
            if(sArray[i]==="."){
                continue;
            }
            if(map.indexOf(sArray[i])===-1){
                map.push(sArray[i]);             
            } else {
                //console.log(sArray);
                return false;
            }
        }
        return true;
    }
    
    //go through the array in the matrix to scan for repeat.
    for(var r=0;r<matrix.length;r++){
        if(hasRepeat(matrix[r])===false) {
            return false;
        }
    }
    return true;
};