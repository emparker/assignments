import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
// import { UserContext } from '../context/UserProvider.js'

export default function Navbar(props){
    // const {username: {username}} = useContext(UserContext)


    return (
        <div>
            test navbar.js
            {/* <h1>Hello {username}</h1> */}
            <Link to="">{/* profile page link */}</Link>
            <Link to="">{/* public page link */}</Link>
        </div>
    )
}