import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer(props){
const { logout } = props
    return (
        <Link to="/" onClick={logout}>log out</Link>
    )
}