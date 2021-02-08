import {
    oFrist,
    xFrist,
    panelPalyer
} from "./instalation.js"

export default function xMode() {
    xFrist.addEventListener("click", () => {
        xFrist.classList.add("activePlayer")
        oFrist.classList.remove("activePlayer")
        oFrist.disabled = true
        xFrist.disabled = true
        panelPalyer.innerHTML = "You play as X. Press start"
    })
}