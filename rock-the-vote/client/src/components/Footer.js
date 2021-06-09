import React from 'react'
import { Link } from 'react-router-dom'
import '../css/nav.css'

export default function Footer(props){
const { logout } = props
    return (
        <div className="footer">
            <Link to="/" onClick={logout} className="nav-links">log out</Link>
        </div>
    )
}
