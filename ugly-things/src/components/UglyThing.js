import React from "react"
import { UglyContextConsumer } from "../uglyContext"

function UglyThing(props) {
    // console.log(props)
    const {title, imgUrl, description, _id} = props.uglyData

    return (
        <UglyContextConsumer>
            {({deleteThing, submitEditedThing, modalTitle, modalDescription, modalWindow}) =>(
                <div className="ugly-div">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <img src={imgUrl} alt={description} />
                    <br/>
                    <button onClick={() => deleteThing(_id)}>Delete</button>
                    <br/>
                    <button onClick={(e) => {
                        e.target.parentElement.lastChild.classList.toggle("hidden")
                        modalWindow(title, description)}}>Edit</button>
                    <div className="modal-div">
                        <form onSubmit={() => submitEditedThing()}>
                            <h1>Edit Me</h1>
                            <br/>
                            <input 
                            value={modalTitle}
                            placeholder="Title"
                            name="modalTitle"
                            />
                            <br/>
                            <input 
                            value={modalDescription}
                            placeholder={"description"}
                            name="modalDecription"
                            />
                            <br/>
                            <button>Save</button>
                        </form>
                    </div>
                </div>
            )}
        </UglyContextConsumer>
        
    )
}
// key={id} neeed on line 15?

export default UglyThing

