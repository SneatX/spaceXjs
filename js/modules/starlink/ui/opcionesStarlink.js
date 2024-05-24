import {getAllStarlink} from "../services/apiService.js"

export const mostrarOpcionesStarlink = async() =>{
    let data = await getAllStarlink()
    document.getElementById("selectStarlink").innerHTML = `<option value="">Select</option>`
    for(let i = 10; i < 30; i++) {
        let satelite = data[i]
        let strHTML = `<option value="${satelite.id}">Satelite ${i+1}</option>`
        document.getElementById("selectStarlink").innerHTML += strHTML
    }
}