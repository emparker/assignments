import React from 'react'

export default function IssueForm(props){
    const {
        handleChange,
        handleSubmit,
        buttonText,
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
                <input
                    type="text"
                    value={description}
                    name="description"
                    onChange={handleChange}
                    placeholder= "Description"
                /> 
                <button>{buttonText}</button>
                {/* 
                    * CREATE AN ISSUE
                        -EDIT ISSUE? *MAYBE -CAN BE DONE THROUGH LIST AND MAY BE REDUNDANT HERE*
                    
                */}
            </form>
            
        </div>
    )
}