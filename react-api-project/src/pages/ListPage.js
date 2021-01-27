import { useHistory } from "react-router-dom"
import { useState, useContext } from "react"  
import { context } from "../AnimalDataProvider"


export default function ListPage() {
//pull in context ? 
    let history = useHistory()
    console.log(history.location.state)

    return (
        <div>
            <h1>List of your search results</h1>
        </div>
    )
}