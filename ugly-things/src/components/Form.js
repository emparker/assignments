import React from "react"
import { UglyContextConsumer } from "../uglyContext"


function Form () {
    return (
        <UglyContextConsumer>
            {({newImage, handleChange, handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                <input
                    type= "text"
                    value={newImage.title}
                    placeholder= "Title"
                    name= "title"
                    onChange= {handleChange}
                />
                <br/>
                <input
                    type= "text"
                    value={newImage.imgUrl}
                    placeholder= "Image URL"
                    name= "imgUrl"
                    onChange= {handleChange}
                />
                <br/>
                <input
                    type= "text"
                    value={newImage.description}
                    placeholder= "Description"
                    name= "description"
                    onChange= {handleChange}
                />
                <br/>
                <button>Submit</button>
            </form>
            )}

        </UglyContextConsumer>
    )
}

export default Form
