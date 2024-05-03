export const mostrarOpcionesCohete = async() =>{
    let res = await fetch("https://api.spacexdata.com/v4/rockets")
    let data = await res.json()

    data.forEach((cohete, indice) => {
        let strHTML = `<option value="${cohete.id}">Rocket ${indice+1}</option>`
        document.getElementById("selectRocket").innerHTML += strHTML
    });
}