import { getRocketById } from "./services/apiService.js"

export const mostrarInfo = async (id) => {
    let cohete = await getRocketById(id)
    let listaContenedora = document.querySelector(".list__checklist")
    let { first_flight, country, wikipedia, description } = cohete
    let info = {
        first_flight,
        country,
        wikipedia,
        description
    }
    listaContenedora.innerHTML = ""
    for (let key in info) {
        if(key != "wikipedia"){
            let divPadre = document.createElement("li")
            divPadre.classList.add("checklist__item")
            listaContenedora.innerHTML += `
            <li class="checklist__item">
                <i class='bx bxs-check-circle' style='color:#9499c3'></i>
                <div class="checklist__item__content">
                    <p>${key}</p>
                    <p class="checklist__item__text">${info[key]}</p>
                </div>
            </li>
            `
        }
        else{
            listaContenedora.innerHTML += `
            <li class="checklist__item">
                <i class='bx bxs-check-circle' style='color:#9499c3'></i>
                <div class="checklist__item__content">
                    <p>${key}</p>
                    <a target="blank" href="${info[key]}" class="checklist__item__text">Click aqui</a>
                </div>
            </li>
            `
        }

    }
}