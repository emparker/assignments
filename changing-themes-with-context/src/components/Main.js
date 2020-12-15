import React from "react"

import { ThemeContextConsumer } from "../themeContext"

//may need to make this a class component and change the state for theme?

function Main() {
    return (
        <ThemeContextConsumer>
            {context => (
                <header className={`${context.theme}-theme`}>
                    <h1>{context.theme === "light" ? "Light" : "Dark"} Theme with CONTEXT</h1>

                    <button  className={`${context.theme}-theme`}
                    onClick= {()=> {context.changeTheme()}}> 
                    Change the theme! 
                    </button>
                </header>
            )}
        </ThemeContextConsumer>
    )
}

export default Main

