import { mostrarCohetes } from "./modules/rockets/rocketsMain.js"
import { mostrarStarlink } from "./modules/starlink/starlinkMain.js"

limiparSelectores()

let selectApiElegida = document.querySelector(".seleccionApi")
selectApiElegida.addEventListener("change", async e =>{
    limpiarTodo()
    let value = selectApiElegida.value
        switch (value){
            case "0":
                limpiarTodo()
                break
            case "1":
                limiparSelectores()
                document.querySelector("#selectRocket").style.display = "block"
                await mostrarCohetes()
                break
            case "2":
                limiparSelectores()
                document.querySelector("#selectStarlink").style.display = "block"
                await mostrarStarlink()
                break
        }
})

export function limpiarTodo(){
    document.querySelector(".progressBars__allItems").innerHTML = ''
    document.querySelector(".list__checklist").innerHTML = ''
    document.getElementById("header__title").textContent = ''
    document.querySelector(".content__box1").style.display = "none"
    document.querySelector(".box2__imgDiv").innerHTML = ""
    document.querySelector("#selectRocket").innerHTML = ""
}

function limiparSelectores(){
    let selectores = document.querySelectorAll(".selector")
    selectores.forEach(item =>{
        item.style.display = "none"
    })
}


