import React, { useState, useContext } from 'react'
import AuthForm from '../forms/AuthForm.js'
import { UserContext } from '../context/UserProvider.js'

const initInputs = { username: "", password: "" }

export default function AuthPage(){
    const [ inputs, setInputs ] = useState(initInputs)
    const [ toggle, setToggle ] = useState(false)

    const { signup, login, errMsg, resetAuthErr } = useContext(UserContext)

        function handleChange(e){
            const { name, value } = e.target
            setInputs(prevInputs => ({
                ...prevInputs,
                [name]: value
            }))
        }
        
        function handleSignup(e){
            e.preventDefault()
            signup(inputs)
        }
        
        function handleLogin(e){
            e.preventDefault()
            login(inputs)
        }

        function toggleForm(){
            setToggle(prev => !prev)
            resetAuthErr()
        }

    return (
        <div>
            { !toggle ?
                <>
                    <AuthForm
                        handleChange= {handleChange}
                        handleSubmit= {handleSignup}
                        inputs= {inputs}
                        buttonText="Sign Up!"
                        errMsg={errMsg}
                    />
                    <p onClick={toggleForm}>already a member?</p>
                </>
            :
                <>
                    <AuthForm 
                        handleChange= {handleChange}
                        handleSubmit= {handleLogin}
                        inputs= {inputs}
                        buttonText="Log In!"
                        errMsg={errMsg}
                    />
                    <p onClick={toggleForm}>not a member?</p>
                </>

            }
        </div>
    )
}