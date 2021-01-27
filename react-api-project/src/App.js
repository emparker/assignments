// import { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import { AnimalDataProvider } from "./AnimalDataProvider"
import LandingPage from "./pages/LandingPage"
import FormPage from "./pages/FormPage"
import ListPage from "./pages/ListPage"
import DetailsPage from "./pages/DetailsPage"


export default function App() {


    return (
        <div>
{/* put link tags on the landing page around buttons  */}
            <Switch>
                <Route exact path="/">
                    <LandingPage />
                </Route>

                <AnimalDataProvider>
                    <Route path="/form">
                        <FormPage />
                    </Route>
                    <Route path="/list">
                        <ListPage />
                    </Route>
                    <Route path="/details">
                        <DetailsPage />
                    </Route>
                </AnimalDataProvider>
                    
            </Switch>
        </div>
    )

}
// /:animalId  will need in the DetailsPage path!
// { animals === "" ? "Loading..." : animals.map(animal => <p>{ animal.name }</p>) }
