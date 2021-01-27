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

    const getAnimals = (type, state, age, gender,  size) => {
        
        return axios
            .get(`${apiURL}/animals?type=${type}&state=${state}&age=${age}&gender=${gender}&size=${size}`, {
                headers : {
                    Authorization: `Bearer ${token}`
                }
            }).then((response) => {
                setAnimals(response.data.animals)
            })

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

// { animals === "" ? "Loading..." : animals.map(animal => <p>{ animal.name }</p>) }
