const express = require ("express")
const fruitRouter = express.Router()
const uuid = require("uuid").v4


const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: uuid()
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
        _id: uuid()
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id: uuid()
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: uuid()
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: uuid()
    },{
        name: "soup",
        type: "food",
        price: 300,
        _id: uuid()
    },{
        name: "flour",
        type: "food",
        price: 100,
        _id: uuid()
    }
]

fruitRouter.get("/", (req, res) => {
    res.send(inventoryItems)
})

fruitRouter.get("/", (req, res) => {
    console.log(req.query)
    const filteredItems = inventoryItems.filter(item => {
        return item.type === req.query.type ///what goes here first, the return??!
    })
    res.send(filteredItems)
})

module.exports = fruitRouter