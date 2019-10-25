const { PuzzleReader } = require('./FileParser');
const { SudokuSolver } = require('./SudokuSolver');

class Sudoku {
  constructor() {
    this.file = null;
    this.puzzleReader = null;
    this.sudokuSolver = null;
  }

  run() {
    if (process.argv.length < 3) {
      console.log('Please provide a input file...');
      console.log('Usage:: node Sudoku.js file');
      return;
    }

    [, , this.file] = process.argv;
    this.puzzleReader = new PuzzleReader(this.file);
    this.sudokuSolver = new SudokuSolver(this.puzzleReader.toArray());
    this.sudokuSolver.solve();
  }
}

// Example
const testApp = new Sudoku();
testApp.run();
