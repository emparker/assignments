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
                    description: "",
                    id: ""  //?
                },
                newList: []
            }
        })
    }

    deleteThing = (id) => {
        console.log(id)
        this.setState(prevState => {
            for (let i = 0; i < this.state.uglyThingsList.length; i++) {
                return {
                    newList: [{...prevState.uglyThingsList}].filter(uglyThing => uglyThing[i].id !== uglyThing.id)
                }
            }
        })

           //may need to mae UglyThings a class component and set state there? ID IS NOT DEFINED!
           //console.log(this.state.uglyThingsList[1])
            
    }

    //delete func- use Get of DEL to "remove" an item using id.  setstate uglyThingsList without that item 
    //edit func- use a post request to edit.  um...?  if i can edit in post man i can figure this out
//     fetch(apiId, options)
//       .then(res => res.json())
//       .then(result.id or data? not sure => {
//         this.setState({
//           response: result,
//           isDelete: false,
//           isEdit: false
//         })
//       },
//       (error) => {
//         this.setState({ error });
//       }
//     )
//   }

    render() {
        
        const {newImage, uglyThingsList} = this.state
        return (
            <Provider value={{newImage, 
            uglyThingsList, 
            handleChange: this.handleChange, 
            handleSubmit: this.handleSubmit,
            deleteThing: this.deleteThing}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UglyContextProvider, Consumer as UglyContextConsumer}