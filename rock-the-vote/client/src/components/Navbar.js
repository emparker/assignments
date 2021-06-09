import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "../css/nav.css" 

export default function Navbar(props){
const { username } = props

    return (
        <>
            <h2>EVERY VOTE COUNTS!</h2>
                <div className="nav-bar">
                        <Link to="/profile" className="nav-links">{username}'s page</Link>
                        <Link to="/public" className="nav-links">public feed</Link>
                </div>
        </>
    )
}
