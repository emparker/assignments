
// const {User, SecondUser} = require("./user")
// console.log(new User("Bob", 35, "Brazil"))
// console.log(new SecondUser("emily", "female"))

const express = require("express")
const app = express()
// const uuid = require("uuid").v4

app.use(express.json())
app.use("/movies", require("./routes/movieRouter.js"))
app.use("/users", require("./routes/userRouter.js"))


app.listen(9000, () => {
    console.log("the server is running on Port 9000")
})