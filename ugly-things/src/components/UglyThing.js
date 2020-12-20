import React from "react"
import { UglyContextConsumer } from "../uglyContext"

function UglyThing(props) {
    // console.log(props)
    const {title, imgUrl, description} = props.uglyData
    return (
        <UglyContextConsumer>
            {({UglyThingsList}) =>(
                <div className="ugly-div">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <img src={imgUrl} alt={description} />
                    <br/>
                    <button>Delete</button>
                    <br/>
                    <button>Edit</button>
                </div>
            )}
        </UglyContextConsumer>
        
    )
}


export default UglyThing

