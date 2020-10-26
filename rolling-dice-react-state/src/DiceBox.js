import React, { Component } from "react";
import Dice from "./Dice";

class DiceBox extends Component {
    constructor() {
        super();
        this.state = {
        num1: 0,
        num2: 0,
        num3: 0,
        num4: 0,
        num5: 0,
        // isChecked: false
        };
        this.rollDice = this.rollDice.bind(this);
    }

    rollDice() {
    for (const num in this.state) {
        // console.log( num )
        this.setState({
            [num]:Math.floor(Math.random() * 6)
        })

    } 
    //before Danny's enlightening "for in" statement
    // this.setState({
    //   num1: Math.floor(Math.random() * 6),
    //   num2: Math.floor(Math.random() * 6),
    //   num3: Math.floor(Math.random() * 6),
    //   num4: Math.floor(Math.random() * 6),
    //   num5: Math.floor(Math.random() * 6),
    // });
}

render() {
return (
    <div>
    {/*     <h1>Dice Roll 1: {this.state.num1}</h1>
            <h1>Dice Roll 2: {this.state.num2}</h1>
            <h1>Dice Roll 3: {this.state.num3}</h1>
            <h1>Dice Roll 4: {this.state.num4}</h1>
            <h1>Dice Roll 5: {this.state.num5}</h1> */}
    <button onClick={this.rollDice}>this is the button</button>
    <Dice number= {this.state.num1} />
    <Dice number= {this.state.num2} />
    <Dice number= {this.state.num3} />
    <Dice number= {this.state.num4} />
    <Dice number= {this.state.num5} />
    </div>
);
}
}

export default DiceBox;


// props = {
//     number: 38,
//     name: bob
// }