import {getAllRockets} from "../services/apiService.js"

export const mostrarOpcionesCohete = async() =>{
    let data = await getAllRockets()

    data.forEach((cohete, indice) => {
        let strHTML = `<option value="${cohete.id}">Rocket ${indice+1}</option>`
        document.getElementById("selectRocket").innerHTML += strHTML
    });
}