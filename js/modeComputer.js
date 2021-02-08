import {
    oFrist,
    xFrist,
    btnComputer,
    btnHuman,
    panelMode,
    panelPalyer
} from "./instalation.js"

export default function modeComputer() {
    btnComputer.addEventListener("click", function () {
        btnComputer.classList.add("activeMode")
        btnHuman.classList.remove("activeMode")
        btnComputer.disabled = true
        btnHuman.disabled = true
        oFrist.disabled = true
        xFrist.disabled = true
        panelMode.innerHTML = "You are playing against the computer. You start"
        panelPalyer.innerHTML = "You play as O. Press Start"
    })
}