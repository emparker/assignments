import React from "react"
import Spots from "./Spots"
import vacationSpots from "./vactionSpots"


function App() {
    const spotsComponent = vacationSpots.map(spots => <Spots 
        key= {spots.id} 
        place= {spots.place} 
        price= {spots.price} 
        timeToGo= {spots.timeToGo} 
    />)

    return (
        <div>
            <Spots />
            {spotsComponent}
        </div>
    )
}

export default App

