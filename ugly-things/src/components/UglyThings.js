import React from "react"
import UglyThing from "./UglyThing"
import { UglyContextConsumer } from "../uglyContext"

function UglyThings() {
    return (
        <div className="list-div">
            <UglyContextConsumer>
                {({uglyThingsList}) => (
                        uglyThingsList.map((thing) => (
                            <UglyThing uglyData={thing}/>
                        )
                    )
                )}
            </UglyContextConsumer>
        </div>
        )
    }

export default UglyThings

