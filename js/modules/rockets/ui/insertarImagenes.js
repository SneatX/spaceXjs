import { getRocketById } from "../services/apiService.js";

export const mostrarImagenesCohete = async(id) =>{
    let contenedor = document.querySelector(".box2__imgDiv")
    contenedor.innerHTML = ""
    let cohete = await getRocketById(id)
    let {flickr_images} = cohete
    flickr_images.forEach(foto => {
        contenedor.innerHTML += /*html*/`<img src="${foto}" alt="">`
    });
}