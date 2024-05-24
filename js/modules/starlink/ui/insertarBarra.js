export const insertarBarraStarlink =(valor, valorMax, titulo, unidad) => {
    let porcentaje = (valor / valorMax) * 100

    let divContenedor = document.createElement("section")
    divContenedor.classList.add("progressBars__item")
    
    let divTitulo = document.createElement("div")
    divTitulo.classList.add("progressBars__item__title")
    divTitulo.innerHTML =`<h1>${titulo}</h1>`
    
    divContenedor.appendChild(divTitulo)

    let divBarraProgreso = document.createElement("div")
    divBarraProgreso.classList.add("progressBars__item__info")
    let divExterno = document.createElement("div")
    divExterno.classList.add("info__bar")
    let divInterno = document.createElement("div")
    divInterno.classList.add("bar")
    divInterno.style.width = `${porcentaje}%`

    let divInternoTexto = document.createElement("div")
    divInternoTexto.classList.add("info__text")
    divInternoTexto.innerHTML = `<p>${valor} ${unidad}</p>`

    
    divExterno.appendChild(divInterno)
    divBarraProgreso.appendChild(divExterno)
    divBarraProgreso.appendChild(divInternoTexto)
    divContenedor.appendChild(divBarraProgreso)
    document.querySelector(".progressBars__allItems").appendChild(divContenedor)

    /*
    <section class="progressBars__item">
        <div class="progressBars__item__title">
            <h1>Inetial Velocity</h1>
        </div>
        <div class="progressBars__item__info">
            <div class="info__bar">
                <div class="bar" style="width: 50%;"></div>
            </div>
            <div class="info__text">
                <p></p>
            </div>
        </div>
    </section>
    */
}