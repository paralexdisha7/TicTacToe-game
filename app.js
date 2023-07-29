const wins = [
  [0, 4, 8],
  [2, 4, 6],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

let currentTurn = "X";
let gameOver = false;
let xScore = 0;
let oScore = 0;
// let tScore = 0;

const changeTurn = () => {
  currentTurn = currentTurn === "X" ? "O" : "X";
  let turnDisplay = document.querySelector(".turn-display");
  turnDisplay.innerText = currentTurn;
};
const checkWin = () => {
  let boxSymbol = document.getElementsByClassName("box-symbol");
  wins.forEach((combination) => {
    if (
      boxSymbol[combination[0]].innerText ===
        boxSymbol[combination[1]].innerText &&
      boxSymbol[combination[1]].innerText ===
        boxSymbol[combination[2]].innerText &&
      boxSymbol[combination[0]].innerText !== ""
    ) {
      gameOver = true;

      if (boxSymbol[combination[0]].innerText === "X") {
        xScore++;
        let xWon = document.querySelector(".xwon");
        xWon.innerText = xScore;
        let textwin=document.querySelector(".winner");
        textwin.innerText="X Won !!!";
      } else if (boxSymbol[combination[0]].innerText === "O") {
        oScore++;
        let oWon = document.querySelector(".owon");
        oWon.innerText = oScore;
        let textwin=document.querySelector(".winner");
        textwin.innerText="O Won !!!";
      } 
    }
  });
};
var boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((ele) => {
  let boxSymbol = ele.querySelector(".box-symbol");
  ele.addEventListener("click", () => {
    if (boxSymbol.innerText === "" && gameOver === false) {
      boxSymbol.innerText = currentTurn;
      changeTurn();
      checkWin();
    }
  });
});

let ResetButton = document.querySelector("#reset-btn");
ResetButton.addEventListener("click", () => {
  let symbolBox = document.getElementsByClassName("box-symbol");
  Array.from(symbolBox).forEach((Symbol) => {
    Symbol.innerText = "";
  });

  // let turnDisplay = document.querySelector(".turn-display");
  // turnDisplay.innerText = "X";
  let turnDisplay = document.querySelector(".turn-display");
  turnDisplay.innerText = "X";
  currentTurn = "X";
  let textwin=document.querySelector(".winner");
  textwin.innerText="";

  gameOver = false;
});

let Restartbtn = document.querySelector("#restart-btn");
Restartbtn.addEventListener("click", () => {
  let symbolBox = document.getElementsByClassName("box-symbol");
  Array.from(symbolBox).forEach((Symbol) => {
    Symbol.innerText = "";
  });

  let xWon = document.querySelector(".xwon");
  xScore=0;
  xWon.innerText = xScore;

  let oWon = document.querySelector(".owon");
  oScore=0;
  oWon.innerText = oScore;

//   let tie = document.querySelector(".tie");
//   tScore=0;
//   tie.innerText = tScore;

  let turnDisplay = document.querySelector(".turn-display");
  turnDisplay.innerText = "X";
  currentTurn = "X";

  let textwin=document.querySelector(".winner");
  textwin.innerText="";
  gameOver = false;
});
