export const boardItem = document.querySelectorAll(".board__item")
export const reset = document.querySelector(".reset")
export const panel = document.querySelector(".panel")
export const PLAYER_O = "fa-circle"
export const PLAYER_X = "fa-times"
export let round = 1

export let winnerTemplate = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,0]
]

export let boardTemplate = [
    '','','',
    '','','',
    '','',''
]

