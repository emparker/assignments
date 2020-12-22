import React, {Component} from "react"
import { UglyContextConsumer } from "../uglyContext"


class Form extends Component {
    state= {

        title: "",
        imgUrl: "",
        description: ""

    }

    handleChange = (event) => {
        console.log(event.target)
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }




    render () {
        return (
            <UglyContextConsumer>
                {({handleSubmit}) => (
                    <div className="form-div">
                        <form onSubmit={(e) => handleSubmit(e, this.state)} className="form">
                        <input
                            className="title"
                            type= "text"
                            value={this.state.title}
                            placeholder= "Title"
                            name= "title"
                            onChange= {this.handleChange}
                        />
                        <br/>
                        <input
                            className="img"
                            type= "text"
                            value={this.state.imgUrl}
                            placeholder= "Image URL"
                            name= "imgUrl"
                            onChange= {this.handleChange}
                        />
                        <br/>
                        <input
                            className="desc"
                            type= "text"
                            value={this.state.description}
                            placeholder= "Description"
                            name= "description"
                            onChange= {this.handleChange}
                        />
                        <br/>
                        <button className="button">Submit</button>
                    </form>
                </div>
                )}
    
            </UglyContextConsumer>
        )
    }

}

export default Form
