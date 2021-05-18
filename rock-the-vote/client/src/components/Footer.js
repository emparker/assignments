import React from 'react'
import { Link, Redirect } from 'react-router-dom'


export default function Footer(props){
const { logout } = props
    return (
        <Link to="/" onClick={logout}>Log out</Link>
    )
}