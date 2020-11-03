import React from "react"

function Badge(props) {
    // console.log(props)
        return (
            <div className="badgeContainer">
                <h1>BADGE:</h1>
            {/* <div className="badge"> */}
                
                <h2 className="firstAndLastName">Name: {props.badge.firstName} {props.badge.lastName}</h2>
                <h2 className="placeOfBirth">Place of Birth: {props.badge.placeOfBirth}</h2>
                <h2 className="email">Email: {props.badge.email}</h2>
                <h2 className="phone">Phone Number: {props.badge.phone}</h2>
                <h2 className="faveFood">Favorite Food: {props.badge.faveFood}</h2>
                <h3 className="aboutMe">About: {props.badge.aboutMe}</h3>

            {/* </div> */}
            </div>
        )
    }
    


export default Badge