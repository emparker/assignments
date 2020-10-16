import React from "react"
import Spot from "./Spot"
import vacationData from "./vactionSpots"


function App() {
    const spotsMapped= vacationData.map(spot => 
    <Spot 
        key= {spot.id} 
        place= {spot.place} 
        price= {spot.price} 
        timeToGo= {spot.timeToGo} 
    />)

    return (
        <div className='container'>
            {spotsMapped}
        </div>
    )
}

export default App
