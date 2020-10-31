import React, {Component} from "react"
import "./styles.css"
//badge component
//where do you set state?  here because this is where badge gets created or App because its the hub?
// update to ES6 and no binding 
// mapping happens in App?

//state =[badges go in here]

class Badge extends Component {
    constructor(){
    super()
    this.state = {
        newBadge: [], 
        fisrtName: "",
        lastName: "",
        placeOfBirth: "",
        email: "",
        phone: "",
        faveFood: "",
        aboutMe: ""
    }
}

handleChange = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
}


// handleSubmit = () => {}


    render() {
        return (
            <div>
                {/* inputs  and things like this.state.firstName*/}
                {/* submit button and an onSubmit ?? */}
                <form  onSubmit={this.handleSubmit}>
                    <div className="formTop">
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            onChnge={this.handleChange}
                            value={this.state.name}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            onChnge={this.handleChange}
                            value={this.state.name}
                        />
                        <input
                            type="text"
                            placeholder="Place of Birth"
                            name="placeOfBirth"
                            onChnge={this.handleChange}
                            value={this.state.name}
                        />

                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            onChnge={this.handleChange}
                            value={this.state.name}
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            name="phone"
                            onChnge={this.handleChange}
                            value={this.state.name}
                        />
                        <input
                            type="text"
                            placeholder="Favorite Food"
                            name="faveFood"
                            onChnge={this.handleChange}
                            value={this.state.name}
                        />
                    </div>
                    <textarea 
                        value={"Tell us a little about yourself..."}
                        onChange={this.handleChange}
                    />

                    <br/>

                    <button>SUBMIT</button>

                </form>

                <div>
                    {/* badge can go here... {this.state.user.badge} map and put in an unordered list ?? */}
                </div>
            </div>
        )
    }
    
}

export default Badge 