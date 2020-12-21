import React, { Component } from "react"

const { Provider, Consumer } = React.createContext()

class UglyContextProvider extends Component {
    state = {
        uglyThingsList: []
    }


//make call for API? fetch
    componentDidMount(){
        fetch("https://api.vschool.io/emily/thing/")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    uglyThingsList: data
                })
            })
    }



//prevState in submit
    handleSubmit = (event, formObj) => {
        event.preventDefault()
        this.setState((prevState) => {
            return {
                uglyThingsList: [
                    {...formObj},
                    ...prevState.uglyThingsList
                ]
            }
        })
    }

    deleteThing = (id) => {
        console.log(id)
        this.setState(prevState => {
            console.log(prevState)
            return {
                uglyThingsList: [...prevState.uglyThingsList].filter(uglyThing => uglyThing._id !== id)
            }
        
        })
    }
    //may need to mae UglyThings a class component and set state there? ID IS NOT DEFINED!
    //console.log(this.state.uglyThingsList[1])

    render() {
        //do I need newList in this??
        const {newImage, uglyThingsList} = this.state
        return (
            <Provider value={{
            newImage, 
            uglyThingsList,
            handleSubmit: this.handleSubmit,
            deleteThing: this.deleteThing}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UglyContextProvider, Consumer as UglyContextConsumer}