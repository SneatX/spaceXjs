import { mostrarBarras } from "./mostrarBarras.js"
import { mostrarOpcionesCohete } from "./ui/opcionesCohete.js"
import { mostrarInfo } from "./mostrarInfo.js"
import { mostrarTitulo } from "./ui/insertarTitulo.js"
import { mostrarGraficos } from "./mostrarGraficos.js"
import { mostrarImagenesCohete } from "./ui/insertarImagenes.js"

export async function mostrarCohetes() {
    mostrarOpcionesCohete()
    document.getElementById("selectRocket").addEventListener("change", async (event) => {
        if (selectRocket.value === '') {
            document.querySelector(".progressBars__allItems").innerHTML = ''
            document.querySelector(".list__checklist").innerHTML = ''
            document.getElementById("header__title").textContent = ''
            document.querySelector(".content__box1").style.display = "none"
            document.querySelector(".box2__imgDiv").innerHTML = ""
        } else {
            await mostrarBarras(selectRocket.value)
            await mostrarInfo(selectRocket.value)
            await mostrarTitulo(selectRocket.value)
            await mostrarGraficos(selectRocket.value)
            await mostrarImagenesCohete(selectRocket.value)
        }
    })
}