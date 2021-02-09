import { useContext } from "react"  
import { context } from "../AnimalDataProvider"
import { useParams } from "react-router-dom"
// import defaultDogPic from "../images/default_dog_pic.png"
import defaultDogCatPic from "../images/default_dog_cat_pic.png"


export default function DetailsPage() {
    const params = useParams()

    const animalAPI = useContext(context)

    const thisAnimal = animalAPI.animals.find(animal => animal.id == params.animalId)
    
    const headerText = `Am I your new ${thisAnimal.type}?`
    const name = thisAnimal.name
    const age = thisAnimal.age
    const breed = thisAnimal.breeds.primary
    const description = thisAnimal.description
    const email = thisAnimal.contact.email
    const phone = thisAnimal.contact.phone
    const type = thisAnimal.type

    const src = thisAnimal.photos.length > 0 ? thisAnimal.photos[0].small : defaultDogCatPic

    return (
        <div>
            <h1 className="header-text">{headerText}</h1>
            <div className={`${type === "Dog" ? "dog-detail-card-grid" : "cat-detail-card-grid"}`}>
                <div className="details">
                    <h2 className="h2-details">{name}</h2>
                    <p className="col1">Age:</p> <p className="col2">{age}</p>
                    <p className="col1">Breed:</p> <p className="col2">{breed}</p>
                    <p className="col1">Email:</p> <p className="col2">{email}</p>
                    <p className="col1">Ph Number:</p> <p className="col2">{phone}</p>
                </div>
                <p className="description">{description}</p> 
                <div style={{background: `url(${src}) no-repeat center`, backgroundSize: "cover"}} className="img-card-div">
                    {/* <img className="img-card"src={src} alt="Cute adoptable pet"/> */}
                </div>
            </div>
            
        </div>
    )
}
// , 
// (${{}})no-repeat center