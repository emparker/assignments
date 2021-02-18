const express = require('express')
const userRouter = express.Router()
const uuid = require('uuid').v4


//Fake Data:
const users = [
    {name: "Joe", age: 10, _id: uuid()},
    {name: "Larra", age: 10, _id: uuid()},
    {name: "James", age: 4, _id: uuid()},
    {name: "Joone", age: 11, _id: uuid()},
    {name: "Roman", age: 14, _id: uuid()},
    {name: "Ophelia", age: 6, _id: uuid()} 
]

//original way to make the requests. Check movie Router for a different syntax
            //require, response
userRouter.get("/", (req, res) => {
    res.send(users)
})


userRouter.post("/", (req, res) => {
    const newUser = req.body
    newUser._id = uuid()
    users.push(newUser)
    res.send(`you have added ${newUser.name} with the age of ${newUser.age} to the database`)
})




module.exports = userRouter
