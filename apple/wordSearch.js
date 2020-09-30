/*
OICE:

O: boolean
I: Board - Array of arrays - Each array consists of letters
C: casing appears to be important
E:

Diagram - 'ABCCED'
check the first letter in the board
board[0][0]
it's the first letter - A
//change A to be 0, so it is removed from our pool of options
//now check all adjacent Places on the board to see if we can find B
  // col +1 && row + 1

  board[row][col+1] is B
//replace B with 0, indicating it has been found
//check all adjacent places on the board to see if we can find the next letter, C.
  //board[row][col+1], board[row][col-1], board[row+1][col]
  //board

Pseudo
*/

//Solution
var exist = function(board, word) {
  for (var row = 0; row < board.length; row++) {
    for(var col = 0; col < board[row].length; col++) {
      if (board[row][col] === word[0]) {
        debugger;
        board[row][col] = 0;
        if (adjacentLetter(board, row, col, word, 1)) return true;
        // return adjacentLetter(board, row, col, word, 1)
      }
    }
  }
  return false
};

var adjacentLetter = function (board, row, col, word, letterIndex) {
  let letter = word[letterIndex]
  if(!letter) return true;
  //top row
  if(board[row+1] && board[row+1][col] === letter) {
    board[row+1][col] = 0;
    return adjacentLetter(board, row+1, col, word, letterIndex+1)
  } else if(board[row-1] && board[row-1][col] === letter) {
    board[row-1][col] = 0;
    return adjacentLetter(board, row-1, col, word, letterIndex+1)
  } else if (board[row][col - 1] === letter) {
    board[row][col-1] = 0;
    return adjacentLetter(board, row, col - 1, word, letterIndex+1)
  } else if (board[row][col + 1] === letter) {
    board[row][col+1] = 0;
    return adjacentLetter(board, row, col + 1, word, letterIndex+1)
  } else {
    return false;
  }
}

//Tests

var testBoard = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

console.log(exist(testBoard, 'SEE'))