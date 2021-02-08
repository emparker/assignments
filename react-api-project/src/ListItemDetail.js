import defaultDogPic from "./images/default_dog_pic.png"
import { Link } from "react-router-dom"



export default function ListItemDetail(props) {
    console.log( props.animal.type)
    
    const src = props.animal.photos.length > 0 ? props.animal.photos[0].small : defaultDogPic

    return (
        <div className={`${props.animal.type === "dog" ? "dog-list-detail-div" : "cat-list-detail-div"}`}>
            <Link to={{pathname: `/details/${props.animal.id}`}} className="name-link"><h3 className="animal-name-list">{props.animal.name}</h3></Link>
            <img src={src} alt="Cute Adoptable Animal"/>
            <div className="age-gender-list">
                <p className="age-list">Age: {props.animal.age}</p>
                <p className="gender-list">Gender: {props.animal.gender}</p>
            </div>
            {/* <h6>{props.animal.breeds.primary}</h6>
            <p>{props.animal.description}</p>   */}
        </div>
    )
}