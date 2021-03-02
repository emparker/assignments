import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"


//In package json in client(front end) and created a proxy to my server
//axios.get("/bounties")  -knows its to my server. No need for the http as the proxy does that
//axios.get("http://rickandmorty.com") -knows its a request to a 3rd party, not my own
//start backend server with nodemon while in server file.  
//add another terminal window for npm start in front end client file.  both need to run 

ReactDOM.render(
    <App />, document.getElementById("root")
)