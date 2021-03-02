import React from "react"
import axios from "axios"

export default function Bounty(props) {
    console.log(props)
    const { firstName, lastName, living, bounty, type, _id, handleDelete } = props

    

    return (
        <div className="bounty">
            <h1>{firstName} {lastName}</h1>
            <p>{living ? "Living: true" : "Living: Closed"}</p>
            <p>Bounty: ${bounty}</p>
            <p>{type}</p>
            <button onClick={() => {handleDelete(_id)}}>Execute</button>
        </div>
    )
}