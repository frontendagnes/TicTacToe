import randomColor from "./randomColor.js";
randomColor();
import xMode from "./xMode.js";
xMode();
import oMode from "./oMode.js";
oMode();

const boardItem = document.querySelectorAll(".jsItem");
const reset = document.querySelector(".jsReset");
const panel = document.querySelector(".jsPanel");
const oFrist = document.querySelector(".js-oBtn");
const xFrist = document.querySelector(".js-xBtn");
const btnComputer = document.querySelector(".js-btnComputer")
const btnHuman = document.querySelector(".js-btnHuman")

const PLAYER_O = "fa-circle";
const PLAYER_X = "fa-times";

let round = 1;
let activeGame = true;
let turn;

let winnerTemplate = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];

let boardTemplate = ["", "", "", "", "", "", "", "", ""];

function playWithComputer() {
  boardItem.forEach((item) => {
    item.addEventListener("click", function (e) {
      let id = this.dataset.position;
      if (round % 2 !== 0) {
        if (boardTemplate[id] === "" && activeGame) {
          e.target.classList.add(PLAYER_O);
          e.target.classList.add("far");
          boardTemplate[id] = PLAYER_O;
        }
      }
      round++;
      checkWin();
      if (checkDraw() && activeGame) {
        panel.innerHTML = "Draw";
      }
    });

    item.addEventListener("mouseout", function () {
      if (round % 2 === 0) {
        let emptyItem = Object.entries(boardTemplate)
          .filter((item) => item[1] === '')
          .map((item) => item[0])
        console.log(emptyItem)
        let randomField = Math.floor(Math.random() * emptyItem.length);
        let empty = emptyItem[randomField]
        console.log(empty)
       if (activeGame && empty !== undefined){
          boardItem[empty].classList.add(PLAYER_X);
          boardItem[empty].classList.add("fas");
          boardTemplate[empty] = PLAYER_X;
          checkWin();
          if (checkDraw() && activeGame) {
            panel.innerHTML = "Draw";
          }
        }
        round++;
      }

    });

  });
}
const turnX = () => {
  turn = round % 2 === 0 ? PLAYER_O : PLAYER_X;
  return turn;
};
const turnO = () => {
  turn = round % 2 === 0 ? PLAYER_X : PLAYER_O;
  return turn;
};

function activePlayer() {
  if (oFrist.classList.contains("activePlayer")) {
    turnO();
  } else if (xFrist.classList.contains("activePlayer")) {
    turnX();
  } else {
    turnX();
    oFrist.disabled = true;
    xFrist.disabled = true;
    btnHuman.disabled = true
    btnComputer.disabled = true
    
  }
}

function addSymbol(e) {
  let id = this.dataset.position;
  activePlayer();
  if (boardTemplate[id] === "" && activeGame) {
    e.target.classList.add(turn);
    boardTemplate[id] = turn;

    if (turn === PLAYER_X) {
      e.target.classList.add("fas");
    } else {
      e.target.classList.add("far");
    }
  } else {
    console.log("Niedozwolony Ruch");
  }
  round++;
  checkWin();
  if (checkDraw() && activeGame) {
    panel.innerHTML = "Draw";
  }
}

function checkDraw() {
  return boardTemplate.indexOf("") === -1;
}

function checkWin() {
  // let winner = null
  let moves = {
    "fa-circle": [],
    "fa-times": [],
  };
  // field - klasa css przypożądkowana do gracza
  boardTemplate.forEach((field, index) =>
    moves[field] ? moves[field].push(index) : null
  );
  winnerTemplate.forEach((combination) => {
    if (combination.every((index) => moves[PLAYER_X].indexOf(index) > -1)) {
      panel.innerHTML = "X won";
      activeGame = false;
    }
    if (combination.every((index) => moves[PLAYER_O].indexOf(index) > -1)) {
      panel.innerText = "O won";
      activeGame = false;
    }
  });
  // return winner
}

reset.addEventListener("click", resetGame);

function resetGame() {
  activeGame = true;
  oFrist.disabled = false;
  xFrist.disabled = false;
  btnHuman.disabled = false;
  btnComputer.disabled = false;
  xFrist.classList.remove("activePlayer");
  oFrist.classList.remove("activePlayer");
  btnComputer.classList.remove("activeMode");
  btnHuman.classList.remove("activeMode");
  boardTemplate = ["", "", "", "", "", "", "", "", ""];
  round = 1;
  panel.innerHTML = "";
  boardItem.forEach((item) => {
    item.classList.remove("fa-circle", "fa-times", "fas", "far");
  });
  randomColor()
}

function activeComputer(){
btnComputer.addEventListener("click", function(){
  console.log("Gram z Kompem")
  btnComputer.classList.add("activeMode")
  btnHuman.classList.remove("activeMode")
  // playWithComputer()
  oFrist.disabled = true
  xFrist.disabled = true
  btnHuman.disabled = true
  btnComputer.disabled = true
})
}
// activeComputer()

function activeHuman(){
btnHuman.addEventListener("click", function(){
  console.log("Gram z Ludziem")
  btnComputer.classList.remove("activeMode")
  btnHuman.classList.add("activeMode")
  // playWithHuman()
  oFrist.disabled = true
  xFrist.disabled = true
  btnHuman.disabled = true
  btnComputer.disabled = true
})
}
// activeHuman()
function playWithHuman(){
  boardItem.forEach(item => {
    item.addEventListener("click", addSymbol)
  })
  }

function startGame(){
  activeComputer()
  activeHuman()
  console.log("Zaczynamy")
  if (btnComputer.classList.contains("activeMode")){
    playWithComputer()
  } else if (btnHuman.classList.contains("activeMode")){
    playWithHuman()
  }else{
    playWithHuman()
  }
}
startGame()

// btnHuman.addEventListener("click", playWithHuman)
// btnComputer.addEventListener("click", playWithComputer)

// playWithHuman()
// playWithComputer()