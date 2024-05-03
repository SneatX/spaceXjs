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