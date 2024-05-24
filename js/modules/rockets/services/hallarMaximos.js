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
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs:[{diameter:{meters}} = maxDiameterRocket]} = await res.json();
    return meters; 
}

export const getCostPerLaunchMax = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body:JSON.stringify({
            "options":{
                "select":{
                    "cost_per_launch": 1
                },
                "sort":{
                    "cost_per_launch" : "desc"
                },
                "limit":1
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let data = await res.json()
    let {docs:[{cost_per_launch}]} = data
    return cost_per_launch    
}

export const getFirstStageFuelAmountTons = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options":{
                "select":{
                    "first_stage.fuel_amount_tons": 1
                },
                "sort": {
                    "first_stage.fuel_amount_tons": "desc"
                },
                "limit": 1
            }
        })
    }

    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let data = await res.json()
    let {docs:[{first_stage:{fuel_amount_tons}}]} = data
    return fuel_amount_tons
}

export const getFirstBurnTimeSec = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options":{
                "select":{
                    "first_stage.burn_time_sec": 1
                },
                "sort": {
                    "first_stage.burn_time_sec": "desc"
                },
                "limit": 1
            }
        })
    }

    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let data = await res.json()
    let {docs:[{first_stage:{burn_time_sec}}]} = data
    return burn_time_sec
}

export const getSecondStageFuelAmountTons = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options":{
                "select":{
                    "second_stage.fuel_amount_tons": 1
                },
                "sort": {
                    "second_stage.fuel_amount_tons": "desc"
                },
                "limit": 1
            }
        })
    }

    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let data = await res.json()
    let {docs:[{second_stage:{fuel_amount_tons}}]} = data
    return fuel_amount_tons
}

export const getSecondBurnTimeSec = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options":{
                "select":{
                    "second_stage.burn_time_sec": 1
                },
                "sort": {
                    "second_stage.burn_time_sec": "desc"
                },
                "limit": 1
            }
        })
    }

    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let data = await res.json()
    let {docs:[{second_stage:{burn_time_sec}}]} = data
    return burn_time_sec
}
