import React, {Component} from "react"
import Square from "./Square"

class ParentComponent extends Component {
    constructor() {
        super()
        this.state = {
            colors: ["white", "white", "white", "white"]
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClick2 = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(color => {
            if(color.colors[0] === "white"){
                return {
                    colors: ["black", "black", "black", "black"]
                }
            } else if (color.colors[0] === "black"){
                return {
                    colors: ["white", "white", "white", "white"]
                }
            }
                
        } )
    }

    handleClick2() {
        this.setState({colors: ["purple", "purple", "white", "white"]})
            
            // return {
            //     colors: ["purple", "purple", "white", "white"]
                
            // } 
            
        
    }

    render () {
        const squareColorsMap = this.state.colors.map((color, id) => <Square 
            key={id} color={color} 
            handleClick={this.handleClick} 
            handleClick2={this.handleClick2} 
            />)

        return (
            <div className="container">
                <button onClick= {this.handleClick}>HIT ME!</button>
                <button onClick= {this.handleClick2}>try me</button>
                <div className= "boxContainer">
                    
                    {squareColorsMap}
                </div>
            </div>
        )
    }
    
}


export default ParentComponent