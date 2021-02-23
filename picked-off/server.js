const express = require('express')
const app = express()

app.use(express.json())

app.use("/items", require("./router.js"))

const PORT = 9000
app.listen(PORT, () => {
    console.log('Port 9000 sesrver is running')
})