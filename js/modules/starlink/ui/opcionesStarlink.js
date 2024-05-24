import {getAllStarlink} from "../services/apiService.js"

export const mostrarOpcionesStarlink = async() =>{
    let data = await getAllStarlink()
    for(let i = 0; i < 20; i++) {
        let satelite = data[i]
        let strHTML = `<option value="${satelite.id}">Satelite ${i+1}</option>`
        document.getElementById("selectRocket").innerHTML += strHTML
    }
}