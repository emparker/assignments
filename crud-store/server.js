const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

//middleware//
app.use(express.json())
app.use(morgan('dev'))

// app.get("/", (req, res)=> {
//     res.send("helloWorld!")
// })

mongoose.connect('mongodb://localhost:27017/crud_db', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("connected to the database")
    )

//routes//
app.use("/items", require("./routes/inventoryRouter.js"))

//error handler//
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, ()=> {
    console.log("The server is runnig on port 9000")
})