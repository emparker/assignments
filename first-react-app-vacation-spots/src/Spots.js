import React from "react"

function Spots(props) {
    return (
        <div className="card">
            <h3>PLACE: {props.place}</h3>
            <h3 style={{display: !props.price < 500 && "$"}}>PRICE: {props.price}</h3>
            <h3>TIME TO GO: {props.timeToGo}</h3>
            <h2>$$$</h2>  
            <hr/>
        </div>
    )
}

export default Spots

// how to/where to put code to determine $$?