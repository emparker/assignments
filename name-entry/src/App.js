import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state= {
            name:"",
            list: ["Dr Pepper", "G. H Creators", "Cap 'N Crunch"]
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        const arr = this.state.list
        arr.push(this.state.person)
        //push input value to prevState?
        this.setState({ 
            [name]: value, 
            // [list]: value 
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text" 
                        placeholder="Enter Name"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                    />
                    
                    <br />
                    <br />

                    <button>Submit</button>
                </form>
                
                <h1>INFO: {this.state.name} </h1>
                <br />

                <ol onChange={this.handleChange}>
                    {this.state.list.map(person => (<li key={this.state.name}>{person}</li>))}
                </ol>
                
            </div>
        )
    }
}

export default App