export const mostrarBarras = async(id) =>{
    let cohete = await(await fetch(`https://api.spacexdata.com/v4/rockets/${id}`)).json()
    
    let heightMax = await getRocketHeightMaxInM()
    let diameterMax = await getRocketDiameterMaxInM()
    let massMax = await getRocketMassMaxInKg()
    let costPerLaunchMax

    document.querySelector(".progressBars__allItems").innerHTML = ""
    insertarBarra(cohete.height.meters, heightMax, "Height", "M")
    insertarBarra(cohete.diameter.meters, diameterMax, "Diameter", "M")
    insertarBarra(cohete.mass.kg, massMax, "Mass", "kg")


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

export const getRocketMassMaxInKg  = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "mass": 1
                },
                "sort":{
                    "mass.kg": "desc"
                },
                "limit": 1
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs:[{mass:{kg}} = maxMassRocket]} = await res.json();
    return kg;
}

export const getRocketHeightMaxInM = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select":{
                    "height": 1
                },
                "sort":{
                    "height.meters" : "desc"
                },
                "limit" : 1
            },

        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs:[{height:{meters}} = maxHeightRocket]} = await res.json();
    return meters; 
}

export const getRocketDiameterMaxInM = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select":{
                    "diameter": 1
                },
                "sort":{
                    "diameter.meters" : "desc"
                },
                "limit" : 1
            },

        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs:[{diameter:{meters}} = maxDiameterRocket]} = await res.json();
    return meters; 
}

