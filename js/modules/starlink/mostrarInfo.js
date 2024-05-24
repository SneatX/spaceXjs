import { getStarlinkById } from "./services/apiService.js"

export const mostrarInfo = async (code) => {
    let starLink = await getStarlinkById(code)
    let listaContenedora = document.querySelector(".list__checklist")

    let {
         id, 
         spaceTrack:{
            OBJECT_NAME,
            COMMENT,
            CREATION_DATE,
            LAUNCH_DATE,
            OBJECT_TYPE

        } 
        } = starLink
    let info = {
        id,
        OBJECT_NAME,
        COMMENT,
        CREATION_DATE,
        LAUNCH_DATE,
        OBJECT_TYPE
    }
    listaContenedora.innerHTML = ""
    for (let key in info) {
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
}