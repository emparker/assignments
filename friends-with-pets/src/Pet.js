import React from "react"

function Pet(props) {
    return (
        <div>
            <h1>{props.friend.name}</h1>
            <p>{props.friend.age}</p>
            <p>{props.friend.name.animal.name}</p>
        </div>
    )
}

export default Pet