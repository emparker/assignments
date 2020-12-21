import React from "react"
import UglyThing from "./UglyThing"
import { UglyContextConsumer } from "../uglyContext"

function UglyThings() {
    return (
        <div className="list-div">
            <UglyContextConsumer>
                {({uglyThingsList}) => (
                        uglyThingsList.map((thing) => (
                        <UglyThing uglyData={thing} key={thing.id}/>
                        )
                    )
                )}
            </UglyContextConsumer>
        </div>
        )
    }

export default UglyThings

// key={thing.id}  line11?