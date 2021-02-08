import {
    btnComputer,
    btnHuman,
    oFrist,
    xFrist,
    panelMode,
    panelPalyer,
    resetBtn,

} from "./instalation.js"

export default function resetMode() {
    resetBtn.addEventListener("click", () => {
        btnComputer.classList.remove("activeMode")
        btnHuman.classList.remove("activeMode")
        btnComputer.disabled = false
        btnHuman.disabled = false
        oFrist.disabled = true
        xFrist.disabled = true
        panelMode.innerHTML = ''
        panelPalyer.innerHTML = ''
    })
}