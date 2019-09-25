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


window.findNRooksSolution = function(n) {
  //make new board
  let newBoard = new Board({'n':n})
  
  //make function that will be called recursively
  //populates board
  let search = function(row){
    //if row is undefined set it to 0
     row = row || 0;
    //base case
    if(row === n){
      //return rows
      return newBoard.rows();
    }else{
      //loop through column
      for(let column = 0; column < n; column++){
        //put piece on board at row and column
        newBoard.togglePiece(row, column);
//if our newBoard doesn't have any conflicts
if(!newBoard.hasAnyRooksConflicts()){
  // console.log(row)
  //recursive call, to go to next row
           return search(row + 1);
        }
//if conflicts remove piece
          newBoard.togglePiece(row, column);
      }
    }
  };
  //set solution to search function call
let solution = search();
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  //return solution
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  let solutionCount = undefined; // fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  let solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  let solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
