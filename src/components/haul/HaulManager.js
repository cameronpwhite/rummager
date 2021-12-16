export const getHauls = () => {
    return fetch('http://localhost:8000/hauls', {
        headers:{
            "Authorization": `Token ${localStorage.getItem("rum_token")}`
        }
    })
    .then(response => response.json())
}

export const createHaul = (haul) => {
    return fetch('http://localhost:8000/hauls', {
        headers:{
            "Authorization": `Token ${localStorage.getItem('rum_token')}`,
            "Content-Type": 'application/json'
        },
        method: "POST",
        body: JSON.stringify(haul)
    })
    .then(response => response.json())
}

export const getHaulTags = () => {
    return fetch("http://localhost:8000/tags", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("rum_token")}`
        }
    })
    .then(response => response.json())
}