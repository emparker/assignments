import React, {Component} from "react"
const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends Component {
    state = {
        theme: "dark",
        // newTheme: "" ??

    }
//how to destructure?

    changeTheme = () => {
        this.setState(prevState => {
            return {
                theme: prevState.theme === "light" ? "dark" : "light"
            }
        })
    }

    render() {
        return (
            <Provider value={{theme: this.state.theme, changeTheme: this.state.changeTheme }}>
                {this.props.children}
            </Provider>
        )
    }
}


export {ThemeContextProvider, Consumer as ThemeContextConsumer}