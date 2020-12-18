import React, { Component } from "react"

const { Provider, Consumer } = React.createContext()

class UglyContextProvider extends Component {
    state = {
        newImage: {
            title: "",
            imgUrl: "",
            decription: ""
        },
        uglyThingsList: []
    }

//make call for API? fetch
    componentDidMount(){
        fetch("https://api.vschool.io/emily/thing/")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    newImage: {
                        title: "",
                        imgUrl: "",
                        decription: ""
                    },
                    uglyThingsList: data
                })
            })
    }


    handleChange = (event) => {
        console.log(event.target)
        const {name, value} = event.target
        this.setState((prevState)=> {
            return {
                newImage: {
                    ...prevState.newImage,
                    [name]: value
                }
            }
        })
    }

//prevState in submit
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState((prevState) => {
            return {
                uglyThingsList: [
                    {...this.state.newImage},
                    ...prevState.uglyThingsList
                ],
                newImage: {
                    title: "",
                    imgUrl: "",
                    description: ""
                }
            }
        })
    }

    render() {
        
        const {newImage, uglyThingsList} = this.state
        return (
            <Provider value={{newImage, 
            uglyThingsList, 
            handleChange: this.handleChange, 
            handleSubmit: this.handleSubmit}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UglyContextProvider, Consumer as UglyContextConsumer}