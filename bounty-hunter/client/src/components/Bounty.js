import React, { useState } from "react"

export default function Bounty(props) {
    const { firstName, lastName, living, bounty, type, _id, handleDelete, handleExecution, handleEdit } = props
    console.log(props)

    const [ toggle, setToggle ] = useState(false)

    //for the edit form
    const initInputs = { firstName: "", lastName: "", type: "", bounty: "", living: true }
    const [ inputs, setInputs ] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSaveAndEdit(e) {
        e.preventDefault()
        // console.log(inputs)
        handleEdit(inputs, _id)
        // setInputs()
        setInputs(initInputs)
        setToggle((prev)=> !prev)
    }
    

    return (
        <>
            { !toggle ? (
                <div className="bounty">
                    <h1 style={{textDecoration: living ? "none ": "line-through"}}>{firstName} {lastName}</h1>
                    <p>{living ? "Living: true" : "Living: Closed"}</p>
                    <p>Bounty: ${bounty}</p>
                    <p>{type}</p>
                    <button onClick={()=> {handleDelete(_id)}}>Delete</button>
                    <button onClick={()=> setToggle((prev)=> !prev)}>Edit</button>
                    <button onClick={()=> {handleExecution(_id)}}>Execute</button>
                </div>
            )
            :
            (
                <div className="edit-form">
                    <form onSubmit={handleSaveAndEdit}>
                        <input 
                            type="text" 
                            name="firstName"
                            value={inputs.firstName} 
                            onChange={handleChange}
                            placeholder="First Name"
                        /> 
                        <input
                            type="text" 
                            name="lastName" 
                            value={inputs.lastName} 
                            onChange={handleChange} 
                            placeholder="Last Name"
                        />
                        <input 
                            type="text"
                            name="type" 
                            value={inputs.type} 
                            onChange={handleChange} 
                            placeholder="Good or Bad"
                        />
                        <input 
                            type="text"
                            name="bounty" 
                            value={inputs.bounty} 
                            onChange={handleChange} 
                            placeholder="Bounty"
                        />
                        <button>Save</button>
                    </form>
                </div>
            )

            }
        </>
    )
}