import {getRocketById} from "../services/apiService.js"

export const mostrarTitulo = async(id) =>{
    let rocket = await getRocketById(id)
    let titulo = rocket.name

    document.getElementById("header__title").textContent = titulo
} 