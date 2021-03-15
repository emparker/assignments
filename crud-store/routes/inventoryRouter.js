const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require("../models/inventoryModel.js")

//get all//
inventoryRouter.get("/", (req, res, next) => {
    Inventory.find((err, items) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})

//create one//
inventoryRouter.post("/", (req, res, next) => {
    const newItem = new Inventory(req.body)
    newItem.save((err, savedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedItem)
    })
})

//update one(PUT)//
inventoryRouter.put("/:itemId", (req, res, next) => {
    Inventory.findOneAndUpdate(
        { _id: req.params.itemId },
        req.body,  //can use our own object to updat with here. 
        { new : true },  //sends back updated version 
        (err, updatedItem) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedItem)
        }
    )
})

//get one//
inventoryRouter.get("/:itemId", (req, res, next) => {
    Inventory.findOne({ _id: req.params.itemId },
    (err, foundItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundItem)
    })
})

//delete//
inventoryRouter.delete("/:itemId", (req, res, next) => {
    Inventory.findOneAndDelete(
        { _id: req.params.itemId },
        (err, deletedItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`You have successfully deleted an item from inventory: ${deletedItem.item}`)
        }
    )
})


module.exports = inventoryRouter
