export const mostrarBarras = async(value) =>{
    let data = await(await fetch("https://api.spacexdata.com/v4/rockets")).json()

    let cohete = data[value]

    let alturas = []
    let diametros = []
    let masas = []

    for(let rocket of data){
        alturas.push(rocket.height.meters)
        diametros.push(rocket.diameter.meters)
        masas.push(rocket.mass.kg)
    }
    
    let alturaMax = hallarMaximo(alturas)
    let diametroMax = hallarMaximo(diametros)
    let masaMax = hallarMaximo(masas)

    insertarBarras(cohete, alturaMax, diametroMax, masaMax)
}

function insertarBarras (rocket, alturaMax, diametroMax, masaMax){

    let porcentajeAltura = (rocket.height.meters / alturaMax) * 100
    let porcentajeDiametro = (rocket.diameter.meters / diametroMax) * 100
    let porcentajeMasa = (rocket.mass.kg / masaMax) * 100

    document.querySelector(".progressBars__allItems").innerHTML = `
    <section class="progressBars__item">
        <div class="progressBars__item__title">
            <h1>Height</h1>
        </div>
        <div class="progressBars__item__info">
            <div class="info__bar">
                <div class="bar" style="width: ${porcentajeAltura}%;"></div>
            </div>
            <div class="info__text">
                <p>${rocket.height.meters} m</p>
            </div>
        </div>
    </section>

    <section class="progressBars__item">
        <div class="progressBars__item__title">
            <h1>Diameter</h1>
        </div>
        <div class="progressBars__item__info">
            <div class="info__bar">
                <div class="bar" style="width: ${porcentajeDiametro}%;"></div>
            </div>
            <div class="info__text">
                <p>${rocket.diameter.meters} m</p>
            </div>
        </div>
    </section>

    <section class="progressBars__item">
    <div class="progressBars__item__title">
        <h1>Mass</h1>
    </div>
    <div class="progressBars__item__info">
        <div class="info__bar">
            <div class="bar" style="width: ${porcentajeMasa}%;"></div>
        </div>
        <div class="info__text">
            <p>${rocket.mass.kg} Kg</p>
        </div>
    </div>
</section>
    `
}

function hallarMaximo (arr){
    let max = arr[0]

    for(let i = 1; i < arr.length; i++){
        arr[i] > max ? max = arr[i] : arr[i]
    }
    return max
}
