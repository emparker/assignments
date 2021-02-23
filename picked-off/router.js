const express = require('express')
const router = express.Router()

const { testMiddleware, test2 } = require("./middleware")

router.use("/", testMiddleware, test2)

router.get("/", (req, res, next) => {
    res.send(req.body)
})

module.exports = router