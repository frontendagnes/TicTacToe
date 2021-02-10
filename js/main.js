//#region importy
// importuje stałe z osobnego pliku
import {
  boardItem,
  reset,
  panel,
  oFrist,
  xFrist,
  btnComputer,
  btnHuman,
  doneBtn,
  resetBtn,
  PLAYER_O,
  PLAYER_X,
  winnerTemplate
} from "./instalation.js"
//reset całej gry
// import clearField from "./clearField.js"
// losowanie kolorów
import randomColor from "./randomColor.js";
randomColor();
// Gracz wybiera X
import xMode from "./xMode.js";
xMode();
// Gracz wybiera O
import oMode from "./oMode.js";
oMode();
// Gracz wybiera grę z drugim człowiekiem
import modeHuman from "./modeHuman.js"
modeHuman()
// Gracz wybiera grę z komputerem
import modeComputer from "./modeComputer.js"
modeComputer()
// Resetuje tylko ustawienia
import resetMode from "./resetMode.js"
resetMode()
//#endregion 

//#region instalation
let round = 1
let activeGame = true
let turn = PLAYER_X

oFrist.disabled = true
xFrist.disabled = true

let boardTemplate = ["", "", "", "", "", "", "", "", ""]
//#endregion

// jako pierwszy gra X
const turnX = () => {
  turn = round % 2 === 0 ? PLAYER_O : PLAYER_X
  return turn
};

// jako pierwszy gra O
const turnO = () => {
  turn = round % 2 === 0 ? PLAYER_X : PLAYER_O
  return turn
};

// tryb Gry z człowiekiem
function playWithHuman() {
  boardItem.forEach(item => {
    item.addEventListener("click", addSymbol)
  })
}

//#region (playerWithComputer) tryb gry z kmputerem
function playWithComputer() {
  boardItem.forEach((item) => {
    item.addEventListener("click", function (e) {
      //  movementHuman Obsługa ruchu człowieka
      let id = this.dataset.position;
      if (round % 2 !== 0) {
        if (boardTemplate[id] === "" && activeGame) {
          e.target.classList.add(PLAYER_O);
          e.target.classList.add("far");
          boardTemplate[id] = PLAYER_O;
        }
      }
      round++
      checkWin();
      if (checkDraw() && activeGame) {
        panel.innerHTML = "Draw";
      }
      //ruch komputera
      movementComputer()
    })
  })
}
//#endregion

//#region (movementComputer) Obsługa ruchu komputera do funkcji playWithComputer
function movementComputer() {
  if (round % 2 === 0) {
    let emptyItem = Object.entries(boardTemplate)
      .filter((item) => item[1] === '')
      .map((item) => item[0])

    let randomField = Math.floor(Math.random() * emptyItem.length);

    let empty = emptyItem[randomField]
    if (activeGame && empty !== undefined) {
      boardItem[empty].classList.add(PLAYER_X);
      boardItem[empty].classList.add("fas");
      boardTemplate[empty] = PLAYER_X;
      checkWin();
      if (checkDraw() && activeGame) {
        panel.innerHTML = "Draw";
      }
    }
  }
  round++;
}
//#endregion

//#region (activePlayer) Funkcja odpowiedzielna za zmianę aktywnego gracza
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
//#endregion

//#region (addSymbol) Funkcja Obsługuje nazmienne ruchy graczy do funkcji playWithHuman
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

//#endregion

//#region (checkDraw) Sprawdza czy jest remis
function checkDraw() {
  return boardTemplate.indexOf("") === -1;
}
//#endregion

//#region (checkWin) Sprwadza kto wygrał
function checkWin() {
  let moves = {
    "fa-circle": [],
    "fa-times": [],
  };
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
}
//#endregion

//#region (resetGame) Resetuje ustawienia Gry
function resetGame() {
  // round = 1
  // activeGame = true
  // boardTemplate = ["", "", "", "", "", "", "", "", ""]
  // turn = PLAYER_X
  // clearField()

  // randomColor()

  // pod odpaleniu powyższej funckji program się "rozłazi"
  // szukam rozwiązania, chwilowo włączone odświeżanie strony przy resecie
  location.reload()
}
//#endregion

reset.addEventListener("click", resetGame);

//#region (startGame) Przełącza tryb gry człowiek/komputer
function startGame() {
  console.log("Zaczynamy")
  if (btnComputer.classList.contains("activeMode")) {
    playWithComputer()
  } else if (btnHuman.classList.contains("activeMode")) {
    playWithHuman()
  } else {
    playWithHuman()
  }
  btnComputer.disabled = true
  btnHuman.disabled = true
  doneBtn.disabled = true
  resetBtn.disabled = true
}
//#endregion

doneBtn.addEventListener("click", startGame)