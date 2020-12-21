import React from "react"
import { UglyContextConsumer } from "../uglyContext"

function UglyThing(props) {
    // console.log(props)
    const {title, imgUrl, description, _id} = props.uglyData
    // const {id} = props.deleteThing
    return (
        <UglyContextConsumer>
            {({deleteThing}) =>(
                <div className="ugly-div">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <img src={imgUrl} alt={description} />
                    <br/>
                    <button onClick={() => deleteThing(_id)}>Delete</button>
                    <br/>
                    <button>Edit</button>
                </div>
            )}
        </UglyContextConsumer>
        
    )
}
// key={id} neeed on line 15?

export default UglyThing

