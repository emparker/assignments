const express = require('express')
const app = express()

app.use(express.json())
app.use("/bounties", require("./routes/bountyRouter.js"))

app.listen(9000, () => {
    console.log("Your server is fabulous... and on port 9000")
})
