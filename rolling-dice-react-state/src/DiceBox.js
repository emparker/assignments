import React, {Component} from "react"

class DiceBox extends Component { 
    constructor() {
        super()
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0,
        }
        this.ranoNum = this.randoNum.bind(this)
    }
    
    randoNum() {
        const diceRoll = Math.floor(Math.random() * 6)
        this.setState(()=> {
            return {
                num1: diceRoll,
                num2: diceRoll,
                num3: diceRoll,
                num4: diceRoll,
                num5: diceRoll
            }
        })
        
    } 
        
//     this.setState(prevState => {
//         return {
//             count: prevState.count + 1
//         }
//     })
// }


    render(){
        
        return (
            <div>
                <h1>Dice Roll 1: {this.randoNum}</h1>
                <h1>Dice Roll 2: {this.randoNum}</h1>
                <h1>Dice Roll 3: {this.randoNum}</h1>
                <h1>Dice Roll 4: {this.randoNum}</h1>
                <h1>Dice Roll 5: {this.randoNum}</h1>
            </div>
        ) 
    }
    
}

export default DiceBox
