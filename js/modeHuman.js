import {
    oFrist,
    xFrist,
    btnComputer,
    btnHuman,
    panelMode,
    panelPalyer
} from "./instalation.js"

export default function modeHuman() {
    btnHuman.addEventListener("click", function () {
        btnHuman.classList.add("activeMode")
        btnComputer.classList.remove("activeMode")
        btnComputer.disabled = true
        btnHuman.disabled = true
        panelMode.innerHTML = "You're playing with a human"
        panelPalyer.innerHTML = "Choose a Player"
        oFrist.disabled = false
        xFrist.disabled = false
    })
}