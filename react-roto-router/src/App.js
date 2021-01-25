import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import "./styles.css"

function Home() {
    return (
        <div className="div">
            <h1>HomePage</h1>
        </div>
    )
}

function About() {
    return (
        <div className="div">
            <h1>About Page</h1>
        </div>
    )
}

function Services() {
    return (
        <div className="div">
            <h1>Services Page</h1>
        </div>
    )
}

function App() {

    return (
        <div>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                
                
            </nav>
            <div className="title">
            <h1>Water Closet, LLC</h1>
            </div>

            <div className="page">
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
            
        </div>
    )

}

export default App