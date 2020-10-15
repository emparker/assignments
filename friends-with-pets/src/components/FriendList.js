import React from "react"
import Friend from "./Friend"
import friendData from "../friends"

function FriendList() {

    const friendsMapped = friendData.map(human => 
    <Friend 
        key={human.id} 
        friend={human}
    />)

    return (
        <div>
            {friendsMapped}
            
        </div>
    )
}

export default FriendList