import React, { useState, useEffect } from "react"
import axios from "axios"
import "./styles.css"
import Bounty from "./components/Bounty.js"
import AddBountyForm from "./components/AddBountyForm.js"

export default function App() {
    const [ bounties, setBounties ] = useState([])

    function getBounties() {
        axios.get("/bounties")
        .then(res => setBounties(res.data))
        .catch(err => console.log(err))
    }

    function addBounty(newBounty) {
        axios.post("/bounties", newBounty)
        .then(res => {
            setBounties(prevBounties => [...prevBounties, res.data.newBounty])
        })
        .catch(err => console.log(err))
    }

    const handleExecution = (_id)=> {
        axios.put(`/bounties/bountied/${_id}`)
        .then(res => {
            setBounties(res.data)
        })
        .catch(err => console.log(err))
    }

    const handleDelete = (_id) => {
        axios.delete(`/bounties/${_id}`)
        .then(res => {
            setBounties(res.data)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getBounties()
    }, [])

    return (
        
        <div className="bounties-container">
            <AddBountyForm addBounty={addBounty} />
            <div className="bounty-components">
                { bounties.map(bounty => 
                    <Bounty 
                            {...bounty} 
                            key={bounty.firstName} 
                            handleDelete={handleDelete} 
                            handleExecution={handleExecution}
                    />) }
            </div>
            
        </div>
    )
} 