//https://leetcode.com/problems/word-search/
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

    var length = word.length;
    var used_letters = [];

    for (var m = 0; m < board.length; m++) {
        var temp_row = [];
        for (var n = 0; n < board[m].length; n++) {
            temp_row.push(false);
        }
        used_letters.push(temp_row);
    }


    function findSolution(word, pos, lettersToBeMatched) {
        var newPos = [];
        var found = false;
        console.log("char#:" + lettersToBeMatched);
        if (lettersToBeMatched === 0) {
            return true;
        }
        //the first char
        if (word.length === lettersToBeMatched) {
            for (var i = 0; i < board.length; i++) {
                var row = board[i];
                for (var j = 0; j < row.length; j++) {
                    var cell = row[j];
                    if (cell === word.charAt(0)) {
                        newPos = [i, j];
                        console.log("#first char########################");
                        console.log(word.charAt(0));
                        console.log(newPos);
                        used_letters[i][j] = true;
                        found = true;
                        if (findSolution(word, newPos, lettersToBeMatched - 1) === true) {
                            return true;
                        } else {
                            used_letters[i][j] = false;
                        }
                    }
                }
            }
            //used_letters[pos[0]][pos[1]] = false;
        } else {
            var char = word.charAt(word.length - lettersToBeMatched);
            var x, y;
            console.log(word.charAt(word.length - lettersToBeMatched));
            if (pos[0] > 0 && board[pos[0] - 1][pos[1]] === char && used_letters[pos[0] - 1][pos[1]] !== true) {

                x = pos[0] - 1;
                y = pos[1];
                newPos = [x, y];
                console.log("north:" + newPos);
                used_letters[x][y] = true;
                if (findSolution(word, newPos, lettersToBeMatched - 1) === true) {
                    return true;
                } else {
                    used_letters[x][y] = false;
                }
            }

            if ((pos[1] + 1) < board[0].length && board[pos[0]][pos[1] + 1] === char && used_letters[pos[0]][pos[1] + 1] !== true) {

                x = pos[0];
                y = pos[1] + 1;
                newPos = [x, y];
                console.log("east:" + newPos);
                used_letters[x][y] = true;
                if (findSolution(word, newPos, lettersToBeMatched - 1) === true) {
                    return true;
                } else {
                    used_letters[x][y] = false;
                }
            }

            if ((pos[0] + 1) < board.length && board[pos[0] + 1][pos[1]] === char && used_letters[pos[0] + 1][pos[1]] !== true) {
                x = pos[0] + 1;
                y = pos[1];
                newPos = [x, y];
                console.log("south:" + newPos);
                used_letters[x][y] = true;
                if (findSolution(word, newPos, lettersToBeMatched - 1) === true) {
                    return true;
                } else {
                    used_letters[x][y] = false;
                }
            } else if (pos[1] > 0 && board[pos[0]][pos[1] - 1] === char && used_letters[pos[0]][pos[1] - 1] !== true) {
                x = pos[0];
                y = pos[1] - 1;
                newPos = [x, y];
                console.log("west:" + newPos);
                used_letters[x][y] = true;
                if (findSolution(word, newPos, lettersToBeMatched - 1) === true) {
                    return true;
                } else {
                    used_letters[x][y] = false;
                }
            }
        }
        //console.log(newPos);
        //console.log(used_letters);
        //console.log(lettersToBeMatched);

        return false;
    }

    return findSolution(word, [0, 0], length);
};