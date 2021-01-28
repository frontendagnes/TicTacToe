function oMode(){
const oFrist = document.querySelector(".js-oBtn")
const xFrist = document.querySelector(".js-xBtn")

    oFrist.addEventListener("click", () => {
        oFrist.classList.add("activeMode")
        xFrist.classList.remove("activeMode")
        oFrist.disabled = true
        xFrist.disabled = true
    })
}

export default function() {
    oMode()
}