import React, {Component} from "react"
import axios from "axios"
import "./styles.css"

//`http://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`

class App extends Component {
    constructor() {
        super()
        this.state= {
            randomColor: ""
        }
    }

    componentDidMount(){
        axios.get(`http://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
            .then(response => {
                this.setState({randomColor: response.data.new_color}) 
                // console.log(response) always check the response to best navigate!
                
            })
            .catch(err => console.log(err))
        
    }

    render(){

        return(
            <div>
                <h1>RANDOM COLOR COMPONENT</h1>
                <div className="div" style={{backgroundColor: `#${this.state.randomColor}`}}>color changing div  - WOW</div>
            </div>
        )
    }
}

export default App
