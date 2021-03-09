const express = require('express')
const app = express()
const morgan = require('morgan')

//middleware//
app.use(express.json())  //Looks for a request body and turns it into req.body
app.use(morgan('dev'))   // Logs requests to the console

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
