import React from "react"
import Spots from "./Spots"
import vacationData from "./vactionSpots"


function App() {
    const spotsMapped= vacationData.map(spots => 
    <Spots 
        key= {spots.id} 
        place= {spots.place} 
        price= {spots.price} 
        timeToGo= {spots.timeToGo} 
    />)

    return (
        <div className='container'>
            {spotsMapped}
        </div>
    )
}

export default App
