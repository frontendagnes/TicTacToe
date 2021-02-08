import {
    boardItem,
    panel,
    oFrist,
    xFrist,
    btnComputer,
    btnHuman,
    doneBtn,
    resetBtn,
    panelPalyer,
    panelMode
} from "./instalation.js"

export default function clearField() {
    oFrist.disabled = true
    xFrist.disabled = true
    btnComputer.disabled = false
    btnHuman.disabled = false
    doneBtn.disabled = false
    resetBtn.disabled = false
    xFrist.classList.remove("activePalyer")
    oFrist.classList.remove("activePlayer")
    btnComputer.classList.remove("activeMode")
    btnHuman.classList.remove("activeMode")
    panel.innerHTML = ''
    panelMode.innerHTML = ''
    panelPalyer.innerHTML = ''
    boardItem.forEach(item => {
        item.classList.remove('fa-circle', 'fa-times', 'fas', 'far')
    })
}