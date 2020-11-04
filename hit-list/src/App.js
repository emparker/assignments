import React, {Component} from "react"
import Person from "./Person"
import "./styles.css"

// https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json

class App extends Component {
    constructor(){
        super()
        this.state={
            hitList: [],
            hasBeenGot: false

        }
    }

    componentDidMount(){
        // console.log("mount")
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
        .then(response => response.json())
        .then(data => this.setState({hitList: data}))
        
    }
    

    render(){
        console.log("render")
        return(
            <div>
                <h1>DON CORLEON'S HIT LIST</h1>

                <div className="container">
                    
                    {this.state.hitList.map(person => < Person key={person.name} person={person} />)}

                </div>
            </div>
        )
    }
}

export default App