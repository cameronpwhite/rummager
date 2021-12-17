import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/myhauls">My Hauls</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/feed">Haul Feed</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/login" onClick={() => localStorage.removeItem("rum_token")}>Logout</Link>
            </li>
        </ul>
    )
}