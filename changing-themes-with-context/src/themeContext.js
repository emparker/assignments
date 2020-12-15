import React, {Component} from "react"
const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends Component {
    state = {
        theme: "dark"
    }


    changeTheme = () => {
        this.setState(prevState => {
            return {
                theme: prevState.theme === "light" ? "dark" : "light"
            }
        })
    }

    render() {
        return (
            <Provider value={{theme: this.state.theme, changeTheme: this.changeTheme }}>
                {this.props.children}
            </Provider>
        )
    }
}


export {ThemeContextProvider, Consumer as ThemeContextConsumer}