import React, { Component } from "react"

const { Provider, Consumer } = React.createContext()

class UglyContextProvider extends Component {
    state = {
        uglyThingsList: [],
        modalTitle: "",
        modalDescription: ""
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


    handleSubmit = (event, formObj) => {
        console.log(formObj)
        event.preventDefault()
        this.setState((prevState) => {
            return {
                uglyThingsList: [
                    {...formObj},
                    ...prevState.uglyThingsList
                ]
            }
        })

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json")

        fetch("https://api.vschool.io/emily/thing", {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(formObj)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                
            })
    }
//I have NO clue what this takes to make it work!!

    modalWindow = (title, description) => {
        this.setState({
            modalTitle: title,
            modalDescription: description
        })
    }

    //handleModalChange(e){

    //}

    
    submitEditedThing = (id) => {
        
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            // "imgUrl":`${this.state.modalImgUrl}`,
            "title":`${this.state.modalTitle}`,
            "description":`${this.state.modalDescription}`
        })

        var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,  //JSON.stringify({formObj}) can also put here and delete line 66
        redirect: 'follow'
        };

        fetch(`https://api.vschool.io/emily/thing/${id}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }


    deleteThing = (id) => {
        console.log(id)
        this.setState(prevState => {
            console.log(prevState)
            return {
                uglyThingsList: [...prevState.uglyThingsList].filter(uglyThing => uglyThing._id !== id)
            }
        })
        
        let requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        }
            fetch(`https://api.vschool.io/emily/thing/${id}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error))
    }

    render() {

        const {uglyThingsList, modalTitle, modalDescription} = this.state
        return (
            <Provider value={{
            modalTitle,
            modalDescription,
            uglyThingsList,
            handleSubmit: this.handleSubmit,
            deleteThing: this.deleteThing,
            submitEditedThing: this.submitEditedThing,
            modalWindow: this.modalWindow}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UglyContextProvider, Consumer as UglyContextConsumer}