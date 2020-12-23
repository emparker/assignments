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
    editThing = (id, title, imgUrl, desc) => {
        console.log(id, title, imgUrl, desc)
        this.state.uglyThingsList.map((formObj, objId) => {
            if (objId === formObj.id) {
                return {
                    title,
                    imgUrl,
                    desc,
                    isEditing: !formObj.isEditing
                }
            }
            return formObj
        })
        
        this.setState((prevState) => {
            return {
                uglyThingsList: [
                    this.formObj, //what to return??

                    ...prevState.uglyThingsList
                ]
            }
        })
        
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "imgUrl":`${imgUrl}`,
            "title":`${title}`,
            "description":`${desc}`
            // formObj Im just making this shit up

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
        };
            fetch(`https://api.vschool.io/emily/thing/${id}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    render() {

        const {uglyThingsList} = this.state
        return (
            <Provider value={{
            
            uglyThingsList,
            handleSubmit: this.handleSubmit,
            deleteThing: this.deleteThing,
            editThing: this.editThing}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UglyContextProvider, Consumer as UglyContextConsumer}