import React, { useState } from "react"

export default function AddBountyForm(props) {
    const initInputs = { firstName: "", lastName: "", type: "", bounty: "", living: true }
    const [ inputs, setInputs ] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(inputs)
        props.addBounty(inputs)
        setInputs(initInputs)
    }

    

    return (
        <form onSubmit={handleSubmit} id = "main-form">
            <input 
                type="text" 
                name="firstName"
                value={inputs.firstName} 
                onChange={handleChange}
                placeholder="First Name"
                className="main-form-input"
            /> 
            <input
                type="text" 
                name="lastName" 
                value={inputs.lastName} 
                onChange={handleChange} 
                placeholder="Last Name"
                className="main-form-input"
            />
            <input 
                type="text"
                name="type" 
                value={inputs.type} 
                onChange={handleChange} 
                placeholder="Good or Bad"
                className="main-form-input"
            />
            <input 
                type="text"
                name="bounty" 
                value={inputs.bounty} 
                onChange={handleChange} 
                placeholder="Bounty"
                className="main-form-input"
            />

            <button id="form-btn">Add Bounty</button>

        </form>
    )

}