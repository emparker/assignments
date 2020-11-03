import React, {Component} from "react"
import "./styles.css"
import Badge from "./Badge"
//badge component
//where do you set state?  here because this is where badge gets created or App because its the hub? here
// update to ES6 and no binding 
// mapping happens in App?

//state =[badges go in here]

class Form extends Component {
        constructor(props){
        super(props)
        this.state = {

            firstName: "",
            lastName: "",
            placeOfBirth: "",
            email: "",
            phone: "",
            faveFood: "",
            aboutMe: "",
            badges: []

        }
    }

isFormValid = () => {
    const {firstName, lastName, placeOfBirth, email, phone, faveFood, aboutMe} = this.state

    return firstName && lastName && placeOfBirth && email && phone && faveFood && aboutMe 
}

handleChange = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
}
// onChange={(value) => 
//     num = value.replace("-", "")}
//         if (isNaN(num)) {
//             //not sure
//         } else {
//             {this.handleChange("phone", num)}
//         }
//     }

handleSubmit = (event) => {
    event.preventDefault()
    this.setState(prevState => {
        return {
            
            badges: [{
                firstName: prevState.firstName,
                lastName: prevState.lastName,
                placeOfBirth: prevState.placeOfBirth,
                email: prevState.email,
                phone: prevState.phone,
                faveFood: prevState.faveFood,
                aboutMe: prevState.aboutMe
            }, ...prevState.badges],
            firstName: "",
            lastName: "",
            placeOfBirth: "",
            email: "",
            phone: "",
            faveFood: "",
            aboutMe: "",
        }
    })
    
}

    render() {
        return (
            <div className="mainDiv">

                <form  onSubmit={this.handleSubmit}>
                    <div className="form">
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            onChange={this.handleChange}
                            value={this.state.firstName}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            onChange={this.handleChange}
                            value={this.state.lastName}
                        />
                        <input
                            type="text"
                            placeholder="Place of Birth"
                            name="placeOfBirth"
                            onChange={this.handleChange}
                            value={this.state.placeOfBirth}
                        />

                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                        />
                        <input
                            type="text"
                            pattern="[0-9]{9,10}"
                            placeholder="Phone Number"
                            name="phone"
                            onChange={this.handleChange}
                            value={this.state.phone}
                        />
                        <input
                            type="text"
                            placeholder="Favorite Food"
                            name="faveFood"
                            onChange={this.handleChange}
                            value={this.state.faveFood}
                        />
                    
                        <textarea 
                            type="text"
                            placeholder="Tell us a little something about yourself..."
                            name="aboutMe"
                            onChange={this.handleChange}
                            value={this.state.aboutMe}
                        />

                        <br/>

                        <button disabled={!this.isFormValid()}>SUBMIT</button>
                        </div>

                </form>
                    
                <div>
                
                    {this.state.badges.map((badge, i) => <Badge 
                    key={badge + i} 
                    badge={badge}
                    />)}
                    
                </div>
            </div>
        )
    }
    
}

export default Form

