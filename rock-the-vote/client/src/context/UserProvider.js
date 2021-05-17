import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext() 

export default function UserProvider(props) {
    const initialState = { 
        token: localStorage.getItem("token") || "", 
        user: JSON.parse(localStorage.getItem("user")) || {} 
    }

    const [ userState, setUserState ] = useState(initialState)

    function signup(credentials){
        axios.post("/auth/signup", credentials)
        .then(res => { 
            const { token, user } = res.data
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function login(credentials){
        axios.post("/auth/login", credentials)
        .then(res => {
            const { token, user } = res.data
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    // function logout(){

    // }

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login
            }}>
            { props.children }
        </UserContext.Provider>
    )
}