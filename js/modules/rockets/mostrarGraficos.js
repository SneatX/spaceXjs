import { getRocketById } from "./services/apiService.js"
import{
    getFirstStageFuelAmountTons,
    getFirstBurnTimeSec,
    getSecondStageFuelAmountTons,
    getSecondBurnTimeSec
} from "./services/hallarMaximos.js"

import {insertarGrafico} from "./ui/insertarGrafico.js"

export const mostrarGraficos = async(id) =>{
    document.querySelector(".content__box1").style.display = "grid"
    let cohete = await getRocketById(id)
    let {
        first_stage:{
            fuel_amount_tons: cantPrimero,
            burn_time_sec: consumoPrimero
        },
        second_stage:{
            fuel_amount_tons: cantSegundo,
            burn_time_sec: consumoSegundo
        }
    } = cohete

    let cantidadPrimeroMax = await getFirstStageFuelAmountTons()
    let consumoPrimeroMax = await getFirstBurnTimeSec() 
    let cantidadSegundoMax = await getSecondStageFuelAmountTons() 
    let consumoSegundoMax = await getSecondBurnTimeSec()

    document.querySelector(`.stage1__graphic`).innerHTML = ""
    document.querySelector(`.stage2__graphic`).innerHTML = ""

    insertarGrafico(cantPrimero, cantidadPrimeroMax, "stage1", "cantidad de combustible")
    insertarGrafico(consumoPrimero, consumoPrimeroMax, "stage1", "combustion por segundo")
    insertarGrafico(cantSegundo, cantidadSegundoMax, "stage2", "cantidad de combustible")
    insertarGrafico(consumoSegundo, consumoSegundoMax, "stage2", "combustion por segundo")
}