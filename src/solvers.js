/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


window.findNRooksSolution = function(n){
// make new board
let newBoard = new Board({n:n});
// make function that will be called recursively
// populates board
let search = function(row){
// if row is undefined set it to 0
row = row || 0;
  // base case
  if(row === n){
    // return rows
    return newBoard.rows();
  }else{
    // loop through column
    for(let column = 0; column < n; column++){
      // put piece on board at row and column
      newBoard.togglePiece(row, column);
      // if our newBoard doesn't have any conflicts
      if(!newBoard.hasAnyRooksConflicts()){
      // recursive call, to go to next row
        return search(row + 1);
      }
// if conflicts remove piece
      newBoard.togglePiece(row, column);
    }
  }
};
  // set solution to search function call
let solution = search();
console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
// return solution
return solution
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n){
let solutionCount = 0;
// make newBoard
let newBoard = new Board({n:n});
// make search function
let search = function(row){
// if row is undefined set it to 0
row = row || 0;
  // base case
  if(row === n){
    // increment row
    solutionCount++;
  }else{
    // loop over columns
    for(let column = 0; column < n; column++){
      // put piece on board at row and column
      newBoard.togglePiece(row, column);
        // if new board doesn't have a column conflict
        if(!newBoard.hasColConflictAt(column)){
          // recursive call to go to next row
          search(row + 1);
        }
        // otherwise, remove piece from the board
        newBoard.togglePiece(row, column);
      }
    }
  }
// try recursively??
// something like if n = 0, callthefunction(n - 1) might work

// call search function
search();
console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
// return solution count
return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n){

  // helper function variable not declared with let or const so global
  // countNQueensSolutions will need to use it
findQueenSolution = function(board, startRow, n, callback){
  // base case
  if(startRow === n){
    return callback(board);
  }
  for(let column = 0; column < n; column++){
    // put down piece at row and column
    board.togglePiece(startRow, column);
    // if there are no conflicts
    if(!board.hasAnyQueensConflicts()){
      // call findQueenSolution recursively and goto next row
      let result = findQueenSolution(board, startRow + 1, n, callback);
      if(result){
        return result;
      }
    }
  // if there is a conflict pick up piece
  board.togglePiece(startRow, column);
  }
};

let newBoard = new Board({n:n});
let solution = newBoard.rows();

findQueenSolution(newBoard, 0, n, function(newBoard){
  return solution;
});

console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n){
let solutionCount = 0;
let newBoard = new Board({n:n});

findQueenSolution(newBoard, 0, n, function(newBoard){
  solutionCount++;
});

console.log('Number of solutions for ' + n + ' queens:', solutionCount);
return solutionCount;
};