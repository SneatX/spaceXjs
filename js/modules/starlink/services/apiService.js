export const getAllStarlink = async() =>{
    let res = await fetch("https://api.spacexdata.com/v4/starlink")
    let data = await res.json()
    return data
}

export const getStarlinkById = async(id) =>{
    let res = await fetch(`https://api.spacexdata.com/v4/starlink/${id}`)
    let rocket = await res.json()
    return rocket
}

