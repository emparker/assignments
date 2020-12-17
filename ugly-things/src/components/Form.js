import React from "react"
import { UglyContextConsumer } from "../uglyContext"


function Form () {
    return (
        <UglyContextConsumer>
            {({newImage, handleChange, handleSubmit}) => (
                <div className="form-div">
                    <form onSubmit={handleSubmit} className="form">
                    <input
                        className="title"
                        type= "text"
                        value={newImage.title}
                        placeholder= "Title"
                        name= "title"
                        onChange= {handleChange}
                    />
                    <br/>
                    <input
                        className="img"
                        type= "text"
                        value={newImage.imgUrl}
                        placeholder= "Image URL"
                        name= "imgUrl"
                        onChange= {handleChange}
                    />
                    <br/>
                    <input
                        className="desc"
                        type= "text"
                        value={newImage.description}
                        placeholder= "Description"
                        name= "description"
                        onChange= {handleChange}
                    />
                    <br/>
                    <button className="button">Submit</button>
                </form>
            </div>
            )}

        </UglyContextConsumer>
    )
}

export default Form
