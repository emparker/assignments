import React from 'react'
import "../css/login.css"

export default function AuthForm(props){

    const {
        handleChange,
        handleSubmit,
        buttonText,
        errMsg,
        inputs: { username, password } 
    } = props


    return (
        <>
            <form id="login-form" onSubmit={handleSubmit}>
                <input
                    className="input"
                    type= "text"
                    value= {username}
                    name= "username"
                    onChange= {handleChange}
                    placeholder= "username"
                />
                <input
                    className="input"
                    type= "password"
                    value= {password}
                    name= "password"
                    onChange= {handleChange}
                    placeholder= "password"
                />
                <button>{ buttonText }</button>
                <p style={{color: "red"}}>{errMsg}</p>
            </form>
        </>
    )
}