import { mostrarBarrasStarlink } from "./mostrarBarrasStarlink.js";
import { mostrarOpcionesStarlink } from "./ui/opcionesStarlink.js";
import { mostrarInfo } from "./mostrarInfo.js";
import { mostrarTitulo } from "./ui/insertarTitulo.js";

export async function mostrarStarlink(){
    mostrarOpcionesStarlink()
    let selectStarlink = document.getElementById("selectStarlink")
    selectStarlink.addEventListener("change", async (event) => {
        event.preventDefault()
        event.stopImmediatePropagation()
        if (selectStarlink.value === '') {
            document.querySelector(".progressBars__allItems").innerHTML = ''
            document.querySelector(".list__checklist").innerHTML = ''
            document.getElementById("header__title").textContent = ''
            document.querySelector(".content__box1").style.display = "none"
            document.querySelector(".box2__imgDiv").innerHTML = ""
        } else {
            await mostrarBarrasStarlink(selectStarlink.value)
            await mostrarInfo(selectStarlink.value)
            await mostrarTitulo(selectStarlink.value)
        }
    })
}