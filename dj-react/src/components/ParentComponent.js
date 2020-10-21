import React, {Component} from "react"
import Squares from "./Squares"

class ParentComponent extends Component {
    constructor() {
        super()
        this.state = {
            colors: ["white", "white", "white", "white"]
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(color => {
            return {
                colors: color.colors //? if statement?
            }
        })
    }

    render () {
        const squaresMapped = Squares.map(<Squares color={this.state.colors}/>)
        return (
            <div className= "container">
                <button onClick= {this.handleClick}>HIT ME!</button>
                {squaresMapped}
            </div>
        )
    }
    
}


export default ParentComponent