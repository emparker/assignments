import React from "react"
import { ThemeContextConsumer } from "../themeContext"

function Footer() {
    return (
        <ThemeContextConsumer>
            {context => (
                <footer className={`${context.theme}-theme`}>
                <h2>This is the Footer with great content</h2>
            </footer>
            )}
            
        </ThemeContextConsumer>
    )
}

export default Footer
