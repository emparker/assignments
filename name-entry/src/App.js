import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state= {
            name:"",
            list: ["Dr Pepper", "G. H Creators", "Cap 'N Crunch"]
        }
        // this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (event) => {
        const { name, value} = event.target
        this.setState({ 
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState(prevState => {
            return { 
                name:"",
                list: [prevState.name, ...prevState.list] 
            }
        }) 
    }

    render() {
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    
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

                <ol>
                    {this.state.list.map((person, i) => (<li key={person + i}>{person}</li>))}
                </ol>
                
            </div>
        )
    }
}

export default App