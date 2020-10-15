import React from "react"

function Pet(props) {
    return (
        <div>
            <p>{props.pet.name}</p>
        </div>
    )
}

export default Pet