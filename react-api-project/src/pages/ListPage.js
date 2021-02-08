import ListItemDetail from "../ListItemDetail"
import { useContext } from "react"  
import { context } from "../AnimalDataProvider"


export default function ListPage() {
    const animalAPI = useContext(context)

    const listItem = animalAPI.animals.map((animal)=> {
        return <ListItemDetail key={animal.id} animal={animal}/>
    })

    return (
        <div className="list-page-div">
            <h1 className="list-h1">Your Search Results</h1>
            {listItem}
        </div>
    )
}