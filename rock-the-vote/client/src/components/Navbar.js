import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
// import { UserContext } from '../context/UserProvider.js'

export default function Navbar(props){
    // const {username: {username}} = useContext(UserContext)
const { username } = props

    return (
        <div>
            <h2>EVERY VOTE COUNTS!</h2>
            <Link to="/profile">{username}'s page</Link>
            <Link to="/public">public feed</Link>
        </div>
    )
}