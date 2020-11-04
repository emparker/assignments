import React from "react"

const Person = (props) => {

    return(
        <div>
            <h1 className="names">{props.person.name} </h1>
            <img className="picture" src={props.person.image} alt="flapjacks"/>
        </div>
    ) 
}

export default Person