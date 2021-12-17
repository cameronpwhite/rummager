import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { deleteHaul, getHaulsByUser } from './HaulManager'
import './MyHauls.css'

export const MyHauls = () => {

    const history = useHistory()
    const [userHauls, setUserHauls] = useState([])
    const [deletedItem, setDeleted] = useState(false)

    useEffect(() => {
        getHaulsByUser().then(setUserHauls)
        .then(setDeleted(false))
    }, [deletedItem])

    return (
        <>
        <h1>My Hauls</h1>
        <Link to='/new'>
            <button type='button' id='create-button'>Create a Haul</button>
        </Link>
        <ul>
            {userHauls.map(
                haul => {
                    return (
                    <>
                    <span className="hauls-info">
                    <li>{haul.description}</li>
                    
                    <Link to={`myhauls/${haul.id}`}>
                    <button>Edit</button>
                    </Link>
                
                    <button onClick={() => deleteHaul(haul.id).then(setDeleted(true))}>Delete</button>
                    </span>
                    </>
                    )}
            )}
        </ul>
        </>
    )
}