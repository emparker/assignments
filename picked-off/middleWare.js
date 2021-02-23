const express = require('express')
const middleWare = express.Router()

// middleWare.use(express.json())

middleWare.use("/", (req, res, next) => {
    console.log('the middleware has fired')
    next()
})

middleWare.use("/", (req, res, next) => {
    req.body = { name: "Roman" }
    next()
})

middleWare.get("/", (req, res, next) => {
    res.send(req.body)
})

module.exports = middleWare