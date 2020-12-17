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

    //get image method?

//make call for API? fetch
    componentDidMount(){
        fetch("https://api.vschool.io/emily/thing/")
            .then(response => response.json())
            .then(data => {
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
        
//preState
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
        
        /*
        
        state = { 
            newImage: { 
                title...
            }
            uglyThingsList: []
            [name]:value
        }

        state={ 
            newImage: { 
                [name]:value
            }, 
            uglyThingsList: []
        }
        
        */
    }
//prevState in submit
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            newImage: {
                title: "",
                imgUrl: "",
                decription: ""
            },
            uglyThingsList: []
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