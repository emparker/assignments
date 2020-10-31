import React, {Component} from "react"
//badge component
//where do you set state?  here because this is where badge gets created or App because its the hub?
// update to ES6 and no binding 
// mapping happens in App?

//state =[badges go in here]

class Badge extends Component {
    constructor(props){
    super(props)
    this.state = {
        //newBadge: [] ?
        //fisrtName: ,
        //lastName: ,
        //placeOfBirth: ,
        //email: ,
        //phone: ,
        //faveFood: ,
        //aboutMe:
    }
}

    render() {
        return (
            <div>
                {/* inputs  and things like this.state.firstName*/}
                {/* submit button and an onSubmit ?? */}
                <div>
                    {/* badge can go here... {this.state.user.badge} ?? */}
                </div>
            </div>
        )
    }
    
}

export default Badge 