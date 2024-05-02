import { mostrarBarras } from "./modules/mostrarBarras.js"

let selectRocket = document.getElementById("selectRocket")
selectRocket.addEventListener("change" , async(event) =>{
    selectRocket.value === '' ? document.querySelector(".progressBars__allItems").innerHTML = '' : await mostrarBarras(Number(selectRocket.value))
})