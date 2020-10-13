import React from "react"
import "./styles.css"


function Spots(props) {
    let isExpensive = props.price

    if (isExpensive < 500) {
        isExpensive = "$"
    } else if (isExpensive > 500 && isExpensive < 1000) {
        isExpensive = "$$"
    } else {
        isExpensive = "$$$"
    }
    //console.log(isExpensive)
    return (
        <div className={props.timeToGo}>
            <h3>PLACE: {props.place}</h3>
            <h3>PRICE: {props.price}  <br/> {isExpensive}</h3>
            <h3>WHEN TO GO: {props.timeToGo}</h3> 
            {/* <hr/> (cute line) */} 
        </div>
            

    )
}

export default Spots

