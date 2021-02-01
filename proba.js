let arr = ["jola", "pola", 2, 56, 569, 45]

// let arrLength = arr.length

// let random = Math.floor(Math.random() * arrLength)

// let arrEl = arr[random]
// console.log(arrEl)

function randomArray(arr){
    const arrLength = arr.length
    let random = Math.floor(Math.random() * arrLength)
    let arrEl = arr[random]
    return arrEl

}

console.log(randomArray(arr))

function addSymbol(e) {
    let id = this.dataset.position
    activePalyer()
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