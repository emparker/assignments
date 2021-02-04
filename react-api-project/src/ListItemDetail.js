import defaultDogPic from "./images/default_dog_pic.png"
import { Link } from "react-router-dom"



export default function ListItemDetail(props) {
    console.log(props.animal.type)
    
    const src = props.animal.photos.length > 0 ? props.animal.photos[0].small : defaultDogPic

    return (
        <div>
            
            <Link to={{pathname: `/details/${props.animal.id}`}}><h3>{props.animal.name}</h3></Link>
            <h6>{props.animal.age}</h6>
            <h6>{props.animal.gender}</h6>
            <h6>{props.animal.breeds.primary}</h6>
            <p>{props.animal.description}</p>  
            <img src={src} alt="Cute Adoptable Animal"/>
        </div>
    )
}