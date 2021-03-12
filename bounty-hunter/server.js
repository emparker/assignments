const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

//middleware//
app.use(express.json())  //Looks for a request body and turns it into req.body
app.use(morgan('dev'))   // Logs requests to the console


//connect to databse//
mongoose.connect('mongodb://localhost:27017/bounty-hunter_db',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
() => console.log("Connected to the DB")
)

//routes//
app.use("/bounties", require("./routes/bountyRouter.js"))

//error handling// ** this is a global err handler **
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

//server listen//
app.listen(9000, () => {
    console.log("Your server is fabulous... and on port 9000")
})
