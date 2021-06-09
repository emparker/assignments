import React from 'react'

export default function IssueForm(props){
    const {
        handleChange,
        handleSubmit,
        buttonText,
        closeEditForm,
        inputs: { title, description} 
    } = props


    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                
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