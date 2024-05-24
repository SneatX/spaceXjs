import{
    getRocketMassMaxInKg,
    getRocketHeightMaxInM,
    getRocketDiameterMaxInM,
    getCostPerLaunchMax
} from "./services/hallarMaximos.js"
import{ insertarBarra } from "./ui/insertarBarra.js"
import{ getRocketById } from "./services/apiService.js"

export const mostrarBarrasRockets = async(id) =>{
    let cohete = await getRocketById(id)
    
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



