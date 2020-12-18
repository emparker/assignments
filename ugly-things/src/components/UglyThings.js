import React from "react"
import UglyThing from "./UglyThing"
import { UglyContextConsumer } from "../uglyContext"

function UglyThings() {
    return (
        <UglyContextConsumer>
            {({uglyThingsList}) => (
                    uglyThingsList.map((thing) => (
                        <UglyThing uglyData={thing}/>
                    )
                )
            )}
            </UglyContextConsumer>
        )
    }

export default UglyThings

