import React from 'react'
import '../css/forms.css'

export default function IssueForm(props){
    const {
        handleChange,
        handleSubmit,
        buttonText,
        closeEditForm,
        inputs: { title, description} 
    } = props


    return (
        <div  id="issue-form-div">
            
            <form onSubmit={handleSubmit} id="issue-form-content">
                
                <input
                    type="text"
                    value={title}
                    name="title"
                    onChange={handleChange}
                    placeholder= "Title"
                /> 
                <textarea
                    type="text"
                    value={description}
                    name="description"
                    onChange={handleChange}
                    placeholder= "Description"
                /> 
                <button>{buttonText}</button>
                <button onClick={closeEditForm}>Nevermind</button>
            </form>
            
        </div>
    )
}