export const mostrarBarras = async(value) =>{
    let data = await(await fetch("https://api.spacexdata.com/v4/rockets")).json()

    let cohete = data[value]

    let alturas = []
    let diametros = []
    let masas = []
    let costsPerLaunchs = []
    let successRate = []

    for(let rocket of data){
        alturas.push(rocket.height.meters)
        diametros.push(rocket.diameter.meters)
        masas.push(rocket.mass.kg)
        costsPerLaunchs.push(rocket.cost_per_launch)
        successRate.push(rocket.success_rate_pct)
    }
    
    let alturaMax = hallarMaximo(alturas)
    let diametroMax = hallarMaximo(diametros)
    let masaMax = hallarMaximo(masas)
    let costoMaximo = hallarMaximo(costsPerLaunchs)
    let exitoMaximo = hallarMaximo(successRate)

    document.querySelector(".progressBars__allItems").innerHTML = ""
    insertarBarra(cohete.height.meters, alturaMax, "Height", "m")
    insertarBarra(cohete.diameter.meters, diametroMax, "Diameter", "m")
    insertarBarra(cohete.mass.kg, masaMax, "Mass", "kg")
    insertarBarra(cohete.cost_per_launch, costoMaximo, "Cost per launch", "$")
    insertarBarra(cohete.success_rate_pct, exitoMaximo, "Success rate", "%")
}

function insertarBarra(valor, valorMax, titulo, unidad){
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
}

// function insertarBarras (rocket, alturaMax, diametroMax, masaMax){

//     let porcentajeAltura = (rocket.height.meters / alturaMax) * 100
//     let porcentajeDiametro = (rocket.diameter.meters / diametroMax) * 100
//     let porcentajeMasa = (rocket.mass.kg / masaMax) * 100

//     document.querySelector(".progressBars__allItems").innerHTML = `
//     <section class="progressBars__item">
//         <div class="progressBars__item__title">
//             <h1>Height</h1>
//         </div>
//         <div class="progressBars__item__info">
//             <div class="info__bar">
//                 <div class="bar" style="width: ${porcentajeAltura}%;"></div>
//             </div>
//             <div class="info__text">
//                 <p>${rocket.height.meters} m</p>
//             </div>
//         </div>
//     </section>

//     <section class="progressBars__item">
//         <div class="progressBars__item__title">
//             <h1>Diameter</h1>
//         </div>
//         <div class="progressBars__item__info">
//             <div class="info__bar">
//                 <div class="bar" style="width: ${porcentajeDiametro}%;"></div>
//             </div>
//             <div class="info__text">
//                 <p>${rocket.diameter.meters} m</p>
//             </div>
//         </div>
//     </section>

//     <section class="progressBars__item">
//     <div class="progressBars__item__title">
//         <h1>Mass</h1>
//     </div>
//     <div class="progressBars__item__info">
//         <div class="info__bar">
//             <div class="bar" style="width: ${porcentajeMasa}%;"></div>
//         </div>
//         <div class="info__text">
//             <p>${rocket.mass.kg} Kg</p>
//         </div>
//     </div>
// </section>
// `
// }

function hallarMaximo (arr){
    let max = arr[0]

    for(let i = 1; i < arr.length; i++){
        arr[i] > max ? max = arr[i] : arr[i]
    }
    return max
}
