import {
    oFrist,
    xFrist,
    panelPalyer
} from "./instalation.js"

export default function oMode() {
    oFrist.addEventListener("click", () => {
        oFrist.classList.add("activePlayer")
        xFrist.classList.remove("activePlayer")
        oFrist.disabled = true
        xFrist.disabled = true
        panelPalyer.innerHTML = "You play as O. Press start"
    })
}