import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { getHaulsByUser } from './HaulManager'

export const MyHauls = () => {

    const history = useHistory()
    const [userHauls, setUserHauls] = useState([])

    useEffect(() => {
        getHaulsByUser().then(setUserHauls)
    }, [])

    return (
        <>
        <h1>My Hauls</h1>
        <Link to='/new'>
            <button type='button'>Create a Haul</button>
        </Link>
        <ul>
            {userHauls.map(
                haul => {
                    return (
                    <>
                    <li>{haul.description}</li>
                    
                    <Link to={`myhauls/${haul.id}`}>
                    <button>Edit</button>
                    </Link>
                
                    <button>Delete</button>
                    </>
                    )}
            )}
        </ul>
        </>
    )
}