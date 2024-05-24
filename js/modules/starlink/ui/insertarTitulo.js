import {getStarlinkById} from "../services/apiService.js"

export const mostrarTitulo = async(id) =>{
    let satelite = await getStarlinkById(id)
    let {spaceTrack: {OBJECT_NAME}} = satelite
    document.getElementById("header__title").textContent = OBJECT_NAME
} 