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
  let newBoard = new Board({n:n})
  //make function that will be called recursively
  //populates board
  let search = function(row){
    //if row is undefined set it to 0
     row = row || 0;
    //base case
    if(n === row){
      //return rows
      return newBoard.rows();
    }else{
      //loop through column
      for(let column = 0; column < n; column++){
        //put piece on board at row and column
        newBoard.togglePiece(row, column);
//if our newBoard doesn't have any conflicts
if(!newBoard.hasAnyRooksConflicts()){
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
  let solutionCount = 0; // fixme
  //make newBoard
  let newBoard = new Board({n:n}) ;
//make search function
  let search = function(row){
    //if row is undefined set it to 0
    row = row || 0;
    //base case
    if(n === row){
      //increment row
      solutionCount++;
    }else{
      //loop over columns
      for(let column = 0; column < n; column++){
        //put piece on board at row and column
        newBoard.togglePiece(row, column);
        //if new bourd doesnt have a column conflict
        if(!newBoard.hasColConflictAt(column)){
          //recursive call to go to next row
          search(row + 1);
        }
        //otherwise, remove piece from the board
        newBoard.togglePiece(row, column);
      }
    }
  }
  //call whole function
  search();
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  //return solution count
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  //set solution to new Board
  let solution = [];
   let newBoard = new Board({n: n})

  let search = function(row){



 row = row || 0;
if(n === row){
let count = 0;
//loop over columns
for(let i = 0; i < (newBoard.rows()).length; i++){
  for(let j= 0; j < (newBoard.rows())[i].length; j++){
    count += newBoard.rows()[i][j];
  }
}
  //add piece on board
  if(count === n || n === 0){
    solution.push(newBoard.rows());
    return;
  }
 
}else{
  for(let column = 0; column < n; column++){
    newBoard.togglePiece(row, column);
    if(!newBoard.hasAnyQueenConflictsOn(row,column)){
      search(row + 1);
      if(solution.length === 1){
        return;
      }
      newBoard.togglePiece(row, column);
    }
  }
}
 solution[0] = search();
if(solution[0] === undefined){
  solution[0] = newBoard.rows();
}
  }



  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  let validRows = Array(n);
  let validCols = Array(n);
  validRows.fill(true);
  validCols.fill(true);

  let solution = new Board({n : n});
  let solutionCount = 0; 

  let search = function(count){
    let row = count;

    if(count === n){
      return true;
    }

    for(let column = 0; column < n; column++){
      if(validRows[row] && validCols[column]){
        solution.togglePiece(row, column);
        count++;

        validRows[row] = false;
        validCols[column] = false;

        if(!solution.hasAnyQueenConflictsOn(row, column)){
          search(count);
        }

        solution.togglePiece(row, column);
        count--;

        validRows[row] = true;
        validCols[column] = true;
      }
    }
  };
  search(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
