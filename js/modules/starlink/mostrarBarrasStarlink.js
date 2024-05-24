import { getStarlinkById } from "./services/apiService.js"
import{ insertarBarraStarlink } from "./ui/insertarBarra.js"

export const mostrarBarrasStarlink = async(id) =>{
    document.querySelector(".progressBars__allItems").innerHTML = ""
    let {
        spaceTrack:{
            MEAN_MOTION,
            APOAPSIS,
            INCLINATION,
            ARG_OF_PERICENTER
        }
    } = await getStarlinkById(id)

    insertarBarraStarlink(MEAN_MOTION, 39, "Mean motion", "u")
    insertarBarraStarlink(APOAPSIS, 200, "Apoasis", "u")
    insertarBarraStarlink(INCLINATION, 120,"Inclination", "°")
    insertarBarraStarlink(ARG_OF_PERICENTER, 300, "Arg of pericenter", "u")
}



