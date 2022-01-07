export const getHauls = () => {
    return fetch('https://rummager-client-app.herokuapp.com/hauls', {
        headers:{
            "Authorization": `Token ${localStorage.getItem("rum_token")}`
        }
    })
    .then(response => response.json())
}

export const getHaul = (haulId) => {
    return fetch (`https://rummager-client-app.herokuapp.com/hauls/${haulId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("rum_token")}`
        }
    })
    .then(response => response.json())
}

export const getHaulsByUser = () => {
    return fetch('https://rummager-client-app.herokuapp.com/hauls/user_hauls', {
        headers: {
            "Authorization": `Token ${localStorage.getItem("rum_token")}`
        }
    })
    .then(response => response.json())
}

export const createHaul = (haul) => {
    return fetch('https://rummager-client-app.herokuapp.com/hauls', {
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
    return fetch("https://rummager-client-app.herokuapp.com/tags", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("rum_token")}`
        }
    })
    .then(response => response.json())
}

export const updateHaulFetch = (haul) => {
    return fetch(`https://rummager-client-app.herokuapp.com/hauls/${haul.id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("rum_token")}`,
            'Content-type': 'application/json'
        },
        body: JSON.stringify(haul)
    })
}

export const deleteHaul = (haulId) => {
    return fetch(`https://rummager-client-app.herokuapp.com/hauls/${haulId}`, {
        method: "DELETE",
        headers: {
            'Authorization': `Token ${localStorage.getItem('rum_token')}`,
        }
    })
}