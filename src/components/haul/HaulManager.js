export const getHauls = () => {
    return fetch('http://localhost:8000/hauls', {
        headers:{
            "Authorization": `Token ${localStorage.getItem("rum_token")}`
        }
    })
    .then(response => response.json())
}

export const getHaul = (haulId) => {
    return fetch (`http://localhost:8000/hauls/${haulId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("rum_token")}`
        }
    })
    .then(response => response.json())
}

export const getHaulsByUser = () => {
    return fetch('http://localhost:8000/hauls/user_hauls', {
        headers: {
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

export const updateHaulFetch = (haul) => {
    return fetch(`http://localhost:8000/hauls/${haul.id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("rum_token")}`,
            'Content-type': 'application/json'
        },
        body: JSON.stringify(haul)
    })
}

export const deleteHaul = (haulId) => {
    return fetch(`http://localhost:8000/hauls/${haulId}`, {
        method: "DELETE",
        headers: {
            'Authorization': `Token ${localStorage.getItem('rum_token')}`,
        }
    })
}