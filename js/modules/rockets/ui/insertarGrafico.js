export const insertarGrafico = async(valor, valorMax, stage, title) =>{
    let porcentaje = (valor / valorMax) * 100
    let divItem = document.createElement("div")
    divItem.classList.add("stage__item")
    
    let divGrafica = document.createElement("div")
    divGrafica.classList.add("item__circleBar")
    divGrafica.style.background = `radial-gradient(
        closest-side, 
        var(--color--one) 85%, 
        transparent 85% 100%), 
        conic-gradient(var(--color--three) 
        ${porcentaje}%, 
        transparent 0)
    `
    let divTexto = document.createElement("div")
    divTexto.classList.add("circleBar__text")
    divTexto.innerHTML = `
    <h4>${title}</h4>
    <p>${valor} Tons</p>
    <p>${porcentaje.toFixed(2)}%</p>
    `
    
    divGrafica.appendChild(divTexto)
    divItem.appendChild(divGrafica)
    document.querySelector(`.${stage}__graphic`).append(divItem)
}