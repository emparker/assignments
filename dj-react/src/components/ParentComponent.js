import React, {Component} from "react"
import Square from "./Square"

class ParentComponent extends Component {
    constructor() {
        super()
        this.state = {
            colors: ["white", "white", "white", "white"]
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
        this.handleClick3 = this.handleClick3.bind(this)
        this.handleClick4 = this.handleClick4.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            if(prevState.colors[0] === "white"){
                return {
                    colors: ["black", "black", "black", "black"]
                }
            } else {
                return {
                    colors: ["white", "white", "white", "white"]
                }
            }
                
        } )
    }

    handleClick2() {
        this.setState(prevState => {
            return {
                colors: ["purple", "purple", prevState.colors[2], prevState.colors[3]]
                
            } 
            
        })
        
    }

    handleClick3() {
        this.setState(prevState => {
            return {
                colors: [prevState.colors[0], prevState.colors[1], "blue", prevState.colors[3]]
            }
        })
    }
    handleClick4() {
        this.setState(prevState => {
            return {
                colors: [prevState.colors[0], prevState.colors[1], prevState.colors[3], "blue"]
            }
        })
    }

    // handleClick2(){
    //     console.log("this was hit")
    //     this.setState({colors: ["purple", "purple", "purple", "purple"]})
    // }

    render () {
        const squareColorsMap = this.state.colors.map((color, id) => <Square 
            key={id} color={color} 
            />)

        return (
            <div>
                <div className="container">
                    <button onClick= {this.handleClick}>HIT ME!</button>
                    <button onClick= {this.handleClick2}>try me</button>
                    <button onClick= {this.handleClick3}>YOU BE BLUE</button>
                    <button onClick= {this.handleClick4}>YOU BLUE TOO</button>
                </div>
                <div className= "boxContainer">
                    {squareColorsMap}
                </div>
            </div>
        )
    }
}


export default ParentComponent
