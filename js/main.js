import { mostrarCohetes } from "./modules/rockets/rocketsMain.js"

let selectApiElegida = document.querySelector(".seleccionApi")
selectApiElegida.addEventListener("change", async e =>{
    let value = selectApiElegida.value
        switch (value){
            case "0":
                await mostrarCohetes()
                break
        }
})

