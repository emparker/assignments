import ListItemDetail from "../ListItemDetail"
import { useContext } from "react"  
import { context } from "../AnimalDataProvider"


export default function ListPage() {
    const animalAPI = useContext(context)

    const listItem = animalAPI.animals.map((animal)=> {
        return <ListItemDetail animal={animal} />
    })

    return (
        <div>
            <h1>List of your search results</h1>
            {listItem}
        </div>
    )
}