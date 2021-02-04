import { useContext } from "react"  
import { context } from "../AnimalDataProvider"
import { useParams } from "react-router-dom"
import defaultDogPic from "../images/default_dog_pic.png"



export default function DetailsPage() {
    const params = useParams()

    const animalAPI = useContext(context)

    const thisAnimal = animalAPI.animals.find(animal => animal.id == params.animalId)
    
    const headerText = `Am I your new ${thisAnimal.type}?`
    const name = thisAnimal.name
    const age = thisAnimal.age
    const breed = thisAnimal.breeds.primary
    const description = thisAnimal.description

    const src = thisAnimal.photos.length > 0 ? thisAnimal.photos[0].small : defaultDogPic

    return (
        <div>
            <h1>{headerText}</h1>
            <h2>{name}</h2>
            <h4>{age}</h4>
            <h4>{breed}</h4>
            <p>{description}</p> 
            <img src={src} alt="Cute adoptable pet"/>
        </div>
    )
}