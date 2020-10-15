import React from "react"
import Pet from "./Pet"
// import friendData from "./friends"  


function Friend(props) {
    // console.log(props)
    const petsMapped = props.friend.pets.map(animal => 
    <Pet  
        key={animal.id} 
        pet={animal}
    />)


    return (
        <div className="friendSheet">
            
            <h1>{props.friend.name}</h1>
            <p>{props.friend.age}</p>
            
        
            {petsMapped}

            
        </div>
    )

}

export default Friend