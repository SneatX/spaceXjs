import { mostrarBarras } from "./modules/mostrarBarras.js"
import {mostrarOpcionesCohete} from "./modules/ui/opcionesCohete.js"

//Mostrar las opciones de los cohetes y agregar un evento de cambio al select
document.addEventListener("DOMContentLoaded", mostrarOpcionesCohete)
document.getElementById("selectRocket").addEventListener("change" , async(event) =>{
    selectRocket.value === '' ? document.querySelector(".progressBars__allItems").innerHTML = '' : await mostrarBarras(selectRocket.value)
})