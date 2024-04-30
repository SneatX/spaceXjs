import { mostrarBarras } from "./modules/mostrarBarras.js"

let selectRocket = document.getElementById("selectRocket")
selectRocket.addEventListener("change" , async(event) =>{
    await mostrarBarras(Number(selectRocket.value))
})