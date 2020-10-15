import React from "react"
import Pet from "./Pet"
import friendData from "./friends"  


function Friend(props) {
    const petsMapped = friendData.map(animal => 
    <Pet  
        key={animal.breed} 
        pet={animal.name}
    />)

    return (
        <div className="friendSheet">
            
            <h1>{props.friend.name}</h1>
            <p>{props.friend.age}</p>
            <p>{props.friend.name.animal.name}</p>
        

            <li>{petsMapped}</li>
            
        </div>
    )

}

export default Friend