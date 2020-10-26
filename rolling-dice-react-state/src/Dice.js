import React from "react"

function Dice(props) {
    console.log("props", props)
    return (
        <div>
            <h1>Dice Roll: {props.number}</h1>
        </div>
    )
}

export default Dice
