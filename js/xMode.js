function xMode(){
const oFrist = document.querySelector(".js-oBtn")
const xFrist = document.querySelector(".js-xBtn")

    xFrist.addEventListener("click", () =>{
        xFrist.classList.add("activeMode")
        oFrist.classList.remove("activeMode")
        oFrist.disabled = true
        xFrist.disabled = true

    })
}

export default function() {
    xMode()
}