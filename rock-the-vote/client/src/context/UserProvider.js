import React from 'react'

export const UserContext = React.createContext() 

export default function UserProvider(props) {


    return (
        <UserContext.Provider>
            { props.children }
        </UserContext.Provider>
    )
}