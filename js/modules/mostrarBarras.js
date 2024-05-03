import{
    getRocketMassMaxInKg,
    getRocketHeightMaxInM,
    getRocketDiameterMaxInM,
    getCostPerLaunchMax
} from "./hallarMaximos.js"

import{ insertarBarra } from "./ui/insertarBarra.js"

export const mostrarBarras = async(id) =>{
    let cohete = await(await fetch(`https://api.spacexdata.com/v4/rockets/${id}`)).json()
    
    let heightMax = await getRocketHeightMaxInM()
    let diameterMax = await getRocketDiameterMaxInM()
    let massMax = await getRocketMassMaxInKg()
    let costPerLaunchMax = await getCostPerLaunchMax()

    document.querySelector(".progressBars__allItems").innerHTML = ""
    insertarBarra(cohete.height.meters, heightMax, "Height", "M")
    insertarBarra(cohete.diameter.meters, diameterMax, "Diameter", "M")
    insertarBarra(cohete.mass.kg, massMax, "Mass", "kg")
    insertarBarra(cohete.cost_per_launch, costPerLaunchMax, "Cost per launch", "$")
}



