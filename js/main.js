const boardItem = document.querySelectorAll(".board__item")

const PLAYER_O = "far fa-circle"
const PLAYER_X = "fas fa-times"
let round = 1

let winnerTemplate = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,0]
]

let boardTemplate = [
    ['','',''],
    ['','',''],
    ['','','']
]
console.log(boardTemplate)

boardItem.forEach( item => {
    
    item.addEventListener("click", () => {
        let id = item.dataset.position
        console.log(id)

    if (boardTemplate[id] !== ''){

    }        
    })

})

