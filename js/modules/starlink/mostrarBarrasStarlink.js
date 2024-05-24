import { getStarlinkById } from "./services/apiService.js"
import{ insertarBarra } from "./ui/insertarBarra.js"

export const mostrarBarrasStarlink = async(id) =>{
    document.querySelector(".progressBars__allItems").innerHTML = ""
    console.log("impresion")
    let {
        spaceTrack:{
            MEAN_MOTION,
            APOAPSIS,
            INCLINATION,
            ARG_OF_PERICENTER
        }
    } = await getStarlinkById(id)

    insertarBarra(MEAN_MOTION, 39, "Mean motion", "u")
    insertarBarra(APOAPSIS, 200, "Apoasis", "u")
    insertarBarra(INCLINATION, 120,"Inclination", "°")
    insertarBarra(ARG_OF_PERICENTER, 300, "Arg of pericenter", "u")
}



