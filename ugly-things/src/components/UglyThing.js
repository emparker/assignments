import React from "react"
import { UglyContextConsumer } from "../uglyContext"

function UglyThing(props) {
    // console.log(props)
    const {title, imgUrl, description, _id} = props.uglyData

    const handleModClick = () => {

        let element = document.getElementById("modal-div")
        element.classList.add("hidden")

    }


    return (
        <UglyContextConsumer>
            {({deleteThing, submitEditedThing, modalTitle, modalDescription, modalWindow, handleModalChange}) =>(
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
                    <div className="hidden" id="modal-div">
                        <form onSubmit={(e) => submitEditedThing(e, _id, modalTitle, modalDescription)}>
                            <h1>Edit Me</h1>
                            <br/>
                            <input 
                            value={modalTitle}
                            placeholder="Title"
                            name="modalTitle"
                            onChange={handleModalChange}
                            />
                            <br/>
                            <input 
                            value={modalDescription}
                            placeholder={"description"}
                            name="modalDescription"
                            onChange={handleModalChange}
                            />
                            <br/>
                            <button onClick={() => {handleModClick()}}>Save</button>
                        </form>
                    </div>
                </div>
            )}
        </UglyContextConsumer>
        
    )
}

export default UglyThing

