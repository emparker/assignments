import React from "react"

function UglyThing(props) {
    // console.log(props)
    const {title, imgUrl, description} = props.uglyData
    return (
        <div className="ugly-div">
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={imgUrl} alt={description} />
        </div>
    )
}


export default UglyThing