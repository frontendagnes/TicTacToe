// import addSymbol from "./addSymbol.js"
const {addSymbol} = require("./addSymbol.js")
import { boardItem } from "./instalation.js"
// console.log(boardTemplate)
// addSymbol()
boardItem.forEach( item => {
    item.addEventListener("click", addSymbol)
})

// console.log(check())

// function check(){
//        let moves = {
//         'blue': [],
//         'red': []
//     }
//     // field - klasa css przypożądkowana do gracza
//     boardTemplate.forEach((field, index) => moves[field] ? moves[field].push[index] : null)
//     // console.log("tablica: " + boardTemplate)
//     winnerTemplate.forEach(combination => {
//         if (combination.every(index => moves[PLAYER_X].indexOf(index) > -1)){
//             panel.innerText = "Zwyciężył X"
//         }
//         if (combination.every(index => moves[PLAYER_O].indexOf(index) > -1)){
//             panel.innerText = "Zwyciężył O"
//         }
//     })
//     return winner
// }

// reset.addEventListener("click", (e) => {
//     e.preventDefault();
// // console.log("klikam reset")
//     boardItem.forEach((item, index) => {
//         console.log("klikam reset " + index)
//         if(item === PLAYER_X){
//             item.classList.remove("PLAYER_X")
//             item.classList.remove("fas")
//         } else{
//             item.classList.remove("PLAYER_O")
//             item.classList.remove("far")
//         }

//     })

// })