const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(express.json())  //Looks for a request body and turns it into req.body
app.use(morgan('dev'))   // Logs requests to the console

app.use("/bounties", require("./routes/bountyRouter.js"))

app.listen(9000, () => {
    console.log("Your server is fabulous... and on port 9000")
})
