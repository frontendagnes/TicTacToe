import randomColor from "./randomColor.js"
randomColor()
import xMode from "./xMode.js"
xMode()
import oMode from "./oMode.js"
oMode()
const boardItem = document.querySelectorAll(".jsItem")
const reset = document.querySelector(".jsReset")
const panel = document.querySelector(".jsPanel")
const oFrist = document.querySelector(".js-oBtn")
const xFrist = document.querySelector(".js-xBtn")

const PLAYER_O = "fa-circle"
const PLAYER_X = "fa-times"

let round = 1
let activeGame = true
let turn

let winnerTemplate = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
]

let boardTemplate = [
    '', '', '',
    '', '', '',
    '', '', ''
]
const turnX = () => {
    turn = round % 2 === 0 ? PLAYER_O : PLAYER_X
    return turn
}
const turnO = () => {
    turn = round % 2 === 0 ? PLAYER_X : PLAYER_O
    return turn
}

boardItem.forEach(item => {
    item.addEventListener("click", addSymbol)
})

function addSymbol(e) {
    let id = this.dataset.position
    if (oFrist.classList.contains("activeMode")) {
        console.log("siemaO")
        turnO()
    } else if (xFrist.classList.contains("activeMode")) {
        console.log("siemaX")
        turnX()
    } else {
        console.log("nie kliknełem")
        turnX()
        oFrist.disabled = true
        xFrist.disabled = true
    }
    if (boardTemplate[id] === '' && activeGame) {

        e.target.classList.add(turn)
        boardTemplate[id] = turn

        if (turn === PLAYER_X) {
            e.target.classList.add("fas")
        } else {
            e.target.classList.add("far")
        }
    } else {
        console.log("Niedozwolony Ruch")
    }
    round++
    checkWin()
    if (checkDraw() && activeGame) {
        panel.innerHTML = "Draw"
    }
}

function checkDraw() {
    return boardTemplate.indexOf('') === -1
}

function checkWin() {
    // let winner = null
    let moves = {
        'fa-circle': [],
        'fa-times': []
    }
    // field - klasa css przypożądkowana do gracza
    boardTemplate.forEach((field, index) => moves[field] ? moves[field].push(index) : null)
    winnerTemplate.forEach(combination => {
        if (combination.every(index => moves[PLAYER_X].indexOf(index) > -1)) {
            panel.innerHTML = "X won"
            activeGame = false
        }
        if (combination.every(index => moves[PLAYER_O].indexOf(index) > -1)) {
            panel.innerText = "O won"
            activeGame = false
        }
    })
    // return winner
}

reset.addEventListener("click", resetGame)

function resetGame() {
    activeGame = true
    oFrist.disabled = false
    xFrist.disabled = false
    boardTemplate = [
        '', '', '',
        '', '', '',
        '', '', ''
    ]
    round = 1
    panel.innerHTML = ''
    boardItem.forEach(item => {
        item.classList.remove('fa-circle', 'fa-times', 'fas', 'far')
    })
}