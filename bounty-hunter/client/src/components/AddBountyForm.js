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
        <form onSubmit={handleSubmit}>
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

            <button>Add Bounty</button>

        </form>
    )

}