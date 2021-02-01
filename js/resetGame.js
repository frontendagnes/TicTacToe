function resetGame() {
    const boardItem = document.querySelectorAll(".jsItem")
    const panel = document.querySelector(".jsPanel")
    const oFrist = document.querySelector(".js-oBtn")
    const xFrist = document.querySelector(".js-xBtn")

    let activeGame = true
    oFrist.disabled = false
    xFrist.disabled = false
    xFrist.classList.remove("activeMode")
    oFrist.classList.remove("activeMode")
    let boardTemplate = [
        '', '', '',
        '', '', '',
        '', '', ''
    ]
    let round = 1
    panel.innerHTML = ''
    boardItem.forEach(item => {
        item.classList.remove('fa-circle', 'fa-times', 'fas', 'far')
    })
}

export default function () {
    resetGame()
}