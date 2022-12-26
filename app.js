class GameState {
  constructor(boardSize) {
    this.boardSize = boardSize;
    this.board = Array(Math.pow(this.boardSize, 2)).fill(0);
  }

  insertRandom(number) {
    let empytCells = this.board
      .map((cell, index) => (cell == 0 ? index : false))
      .filter((index) => index >= 0);
    let randIndex = Math.floor(Math.random() * empytCells.length);
    this.board[randIndex] = number;
  }

  printBoard() {
    let board = [];
    for (let y = 0; y < this.boardSize; y++) {
      let row = [];
      for (let x = 0; x < this.boardSize; x++) {
        row.push(this.board[y * (this.boardSize - 1) + x]);
      }
      board.push(row);
    }
    console.log(board);
  }
}

let game = new GameState(5);

window.addEventListener("keydown", function (event) {
  console.log(event);
});
