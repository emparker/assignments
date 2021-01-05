import React from "react"
import {Link, Switch, Route} from "react-router-dom"

function Home() {
    return (
        <div>
            <h1>HomePage</h1>
        </div>
    )
}

function About() {
    return (
        <div>
            <h1>About Page</h1>
        </div>
    )
}

function Services() {
    return (
        <div>
            <h1>Services Page</h1>
        </div>
    )
}

function App() {


    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                
                
            </nav>
            <Switch >
                <Route exact path="/"> 
                    <Home /> 
                </Route>
                <Route path="/about"> 
                    <About /> 
                </Route>
                <Route path="/services"> 
                    <Services /> 
                </Route>    
            </Switch>
        </div>
    )

}

export default App