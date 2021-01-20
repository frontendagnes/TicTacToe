import {
    PLAYER_X,
    PLAYER_O,
    round,
    boardTemplate
} from "./instalation.js"

function addSymbol(e) {
    let id = this.dataset.position
    // console.log(id)
    const turn = round % 2 === 0 ? PLAYER_O : PLAYER_X
    // console.log(turn)
    if (boardTemplate[id] !== '') return

    e.target.classList.add(turn)
    boardTemplate[id] = turn
    // console.log(boardTemplate)
    if (turn === PLAYER_X) {
        e.target.classList.add("fas")
    } else {
        e.target.classList.add("far")
    }
    round++
}

// export default function () {
//     addSymbol()
// }

module.export.addSymbol = addSymbol