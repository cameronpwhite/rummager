import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'

export const MyHauls = () => {

    const history = useHistory()


    return (
        <>
        <h1>Hauls</h1>
        <Link to='/new'>
            <button type='button'>Create a Haul</button>
        </Link>
        </>
    )
}