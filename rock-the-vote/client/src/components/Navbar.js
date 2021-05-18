import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
// import { UserContext } from '../context/UserProvider.js'

export default function Navbar(props){
    // const {username: {username}} = useContext(UserContext)
const { username } = props

    return (
        <div>
            <h2>Every Vote Counts</h2>
            <Link to="/profile">{username}'s Page</Link>
            <Link to="/public">Public Feed</Link>
        </div>
    )
}