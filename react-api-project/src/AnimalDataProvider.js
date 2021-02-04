import React, { useState, useEffect } from "react"
import axios from "axios";

const apiURL = "https://api.petfinder.com/v2";

const body = {
    grant_type: "client_credentials",
    client_id: process.env.REACT_APP_CLIENT_ID,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
};

const context = React.createContext()

//custom hook
const useAnimalDataHook = () => {
    const [token, setToken] = useState('')

    const getToken = () => {
    
        axios
            .post(`${apiURL}/oauth2/token`, body)
            .then((response) => {
                setToken(response.data.access_token)
        })
    }

    // USE EFFECT SET TOKEN
    useEffect(() => {
        getToken()
    }, [])

    const [animals, setAnimals] = useState([])

    const getAnimals = (query) => {
        
        return axios
                    .get(`${apiURL}/animals?${query}`, {
                        headers : {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    .then(response => {
                        console.log("PROVIDER PG- this is the response: ", response)
                        //console.log(response.data)
                        setAnimals(response.data.animals)
                        return response.data.animals   // needed a return here
                
                
                    }).catch((error) => console.log(error))
    }

    return {
        animals,
        getAnimals
    }
}

function AnimalDataProvider(props) {
    
    const animalsAPI = useAnimalDataHook()

    return (
        
        <context.Provider value={animalsAPI}>
            {props.children}
        </context.Provider>
    )
}

export { AnimalDataProvider, context }
