const express = require('express')
const movieRouter = express.Router()
const uuid = require('uuid').v4

const movies = [
    {title: "die hard", genre: "action", _id: uuid()},
    {title: "starwars IV", genre: "fantasy", _id: uuid()},
    {title: "lion king", genre: "fantasy", _id: uuid()},
    {title: "idiocracy", genre: "comedy", _id: uuid()},
]

//optional (to userRouter) syntax w/ the movieRouter.route("/").get(req, res) etc...
movieRouter.route("/")
    .get((req, res) => {
        res.send(movies)
    })
    .post((req, res) => {
        const newMovie = req.body
        newMovie._id = uuid()
        movies.push(newMovie)
        res.send( `You have successfully added ${newMovie.title} to the database!` )
    })

module.exports = movieRouter