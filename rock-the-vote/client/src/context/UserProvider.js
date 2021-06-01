import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext() 

export default function UserProvider(props) {
    const initialState = { 
        token: localStorage.getItem("token") || "", 
        user: JSON.parse(localStorage.getItem("user")) || {},
        errMsg: ""
    }

    const [ userState, setUserState ] = useState(initialState)

    function signup(credentials){
        axios.post("/auth/signup", credentials)
        .then(res => { 
            const { token, user } = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err => handleAuthError(err.response.data.errMsg))
    }

    function login(credentials){
        axios.post("/auth/login", credentials)
        .then(res => {
            const { token, user } = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err => handleAuthError(err.response.data.errMsg))
    }

    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: ""
        })
    }

    function handleAuthError(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }
    function resetAuthErr(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg: ""
        }))
    }

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                resetAuthErr
            }}>
            { props.children }
        </UserContext.Provider>
    )
}