import React from "react"

export default function Bounty(props) {
    console.log(props)
    const { firstName, lastName, living, bounty, type, _id, handleDelete, handleExecution } = props
    
    

    // style = {{textDecoration: handleExecution ? "line-through : none" }}
    return (
        <div className="bounty">
            <h1 style={{textDecoration: living ? "none ": "line-through"}}>{firstName} {lastName}</h1>
            <p>{living ? "Living: true" : "Living: Closed"}</p>
            <p>Bounty: ${bounty}</p>
            <p>{type}</p>
            <button onClick={()=> {handleDelete(_id)}}>Delete</button>
            <button>Edit</button>
            <button onClick={()=> {handleExecution(_id)}}>Execute</button>
        </div>
    )
}