const express = require('express')
const app = express()

app.use(express.json())

app.use("/items", require("./middleWare.js"))

// app.use("/items", (req, res, next) => {
//     console.log('the middleware has fired')
//     next()
// })

// app.use("/items", (req, res, next) => {
//     req.body = { name: "emily" }
//     next()
// })

// app.get("/items", (req, res, next) => {
//     res.send(req.body)
// })

const PORT = 9000
app.listen(PORT, () => {
    console.log('Port 9000 sesrver is running')
})