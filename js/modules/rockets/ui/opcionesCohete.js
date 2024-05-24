import {getAllRockets} from "../services/apiService.js"

export const mostrarOpcionesCohete = async() =>{
    let data = await getAllRockets()
    document.getElementById("selectRocket").innerHTML = `<option value="">Select</option>`
    data.forEach((cohete, indice) => {
        let strHTML = `<option value="${cohete.id}">Rocket ${indice+1}</option>`
        document.getElementById("selectRocket").innerHTML += strHTML
    });
}