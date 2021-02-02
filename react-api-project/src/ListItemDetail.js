import defaultDogPic from "./images/default_dog_pic.png"

export default function ListItemDetail(props) {

    const src = props.animal.photos.length > 0 ? props.animal.photos[0].small : defaultDogPic
    //fill empty quotes with sub url


    return (
        <div>
            
            <h3>{props.animal.name}</h3>
            <h6>{props.animal.age}</h6>
            <h6>{props.animal.gender}</h6>
            <h6>{props.animal.breeds.primary}</h6>
            <p>{props.animal.description}</p>
            <img src={src} alt="Cute Adoptable Animal"/>
        </div>
    )
}