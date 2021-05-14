import React from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'


export default function IssueForm(props){
    //state inputs, setInputs { title, description }
    // deconstruct props if need?
    // handleSubmit
    // handleChange
    //const {title, description } = inputs


    return (
        <div>
            <Navbar />
            
            <form>
                {/* 
                <input onSubmit={}
                    type="text"
                    value=
                    onChange=
                    placeholder= ""
                /> 
                */}
                <button>Create Your Issue!</button>
                {/* 
                    * CREATE AN ISSUE
                        -EDIT ISSUE? *MAYBE -CAN BE DONE THROUGH LIST AND MAY BE REDUNDANT HERE*
                    
                */}
            </form>
            <Footer />
        </div>
    )
}