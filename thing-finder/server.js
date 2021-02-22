const express = require("express")
const app = express()


app.use(express.json())
app.use("/fruit", require("./fruitRouter.js"))

// app.get("/", (req, res) => {
//     res.send("hello world!")
// })



app.listen("8000", () => {
    console.log("the server is running on Port 8000")
})