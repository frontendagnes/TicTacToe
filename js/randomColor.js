function randomColor() {
    let item = document.querySelectorAll(".jsItem")
    let board = document.querySelector(".jsBoard")
    const reset = document.querySelector(".jsReset")
    let color = `#${Math.random().toString(16).substr(2,6)}`

    for (let i = 0; i < item.length; i++) {
        color = `#${Math.random().toString(16).substr(2,6)}`
        item[i].style.backgroundColor = color
    }
    board.style.border = `2px solid ${color}`
    reset.style.backgroundColor = color
}

export default function () {
    randomColor()
}