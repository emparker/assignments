import React, { useState } from "react"

export default function Bounty(props) {
    const { firstName, lastName, living, bounty, type, _id, handleDelete, handleEdit } = props
    console.log(props)

    const [ toggle, setToggle ] = useState(false)

    //for the edit form - could have just imported the addBounty form- Should refactor or do that way next time!
    const initInputs = { firstName, lastName, type, bounty }
    const [ inputs, setInputs ] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSaveAndEdit(e) {
        e.preventDefault()
        handleEdit(inputs, _id)
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
                    <button onClick={()=> {handleDelete(_id)}} className="card-btn">Delete</button>
                    {living && <button onClick={()=> setToggle((prev)=> !prev)} className="card-btn">Edit</button>}
                    {living && <button onClick={()=> {handleEdit({living : false}, _id)}} className="card-btn">Execute</button>}
                </div>
            )
            :
            (
                <div >
                    <form onSubmit={handleSaveAndEdit} className="edit-form">
                        <input 
                            type="text" 
                            name="firstName"
                            value={inputs.firstName} 
                            onChange={handleChange}
                            placeholder="First Name"
                            className="inputs"
                        /> 
                        <input
                            type="text" 
                            name="lastName" 
                            value={inputs.lastName} 
                            onChange={handleChange} 
                            placeholder="Last Name"
                            className="inputs"
                        />
                        <input 
                            type="text"
                            name="type" 
                            value={inputs.type} 
                            onChange={handleChange} 
                            placeholder="good or bad"
                            className="inputs"
                        />
                        <input 
                            type="text"
                            name="bounty" 
                            value={inputs.bounty} 
                            onChange={handleChange} 
                            placeholder="bounty"
                            className="inputs"
                        />
                        <button id="edit-btn">Done</button>
                    </form>
                </div>
            )

            }
        </>
    )
}