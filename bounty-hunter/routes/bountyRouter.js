const express = require('express')
const bountyRouter = express.Router()
// const uuid = require('uuid').v4 
const Bounty = require("../models/bountyModel.js")



// const bounties = [
//     {firstName: "dark", lastName: "helmut", living: true, bounty: 60, type: "Bad", _id: uuid() },
//     {firstName: "barf", lastName: "mcbarf", living: true, bounty: 170, type: "Good", _id: uuid()},
//     {firstName: "lone", lastName: "starr", living: true, bounty: 5000, type: "Good", _id: uuid()},
//     {firstName: "yogurt", lastName: "n/a", living: true, bounty: 10000, type: "Good", _id: uuid()},
//     {firstName: "prince", lastName: "valium", living: true, bounty: 2, type: "Bad", _id: uuid()},
// ]

//get all and create one//
bountyRouter.route("/")
    .get((req, res, next) => {
        // res.status(200).send(bounties) -old way with hardcoded data
        Bounty.find((err, bounties) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(bounties)
        })
    })
    .post((req, res, next) => {
        const newBounty = new Bounty(req.body)
        newBounty.save((err, savedBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedBounty)
        })
        //old way//
        // const newBounty = req.body
        // newBounty._id = uuid()
        // bounties.push(newBounty)
        // res.status(201).send({
        //     newBounty, 
        //     status: `you have sent ${newBounty.firstName} ${newBounty.lastName} with a bounty of ${newBounty.bounty} to your database!`})
    })
    
//GET one//
bountyRouter.get("/:bountyId", (req, res, next) => {
    Bounty.findOne(
        { _id: req.params.bountyId },
        (err, foundBounty) => {
            if(err){
                res.status(500)
                    return next(err)
            }
            return res.status(200).send(foundBounty)
        })
    })   
//old way//
//     const bountyId = req.params.bountyId
//     const foundBounty = bounties.find(bounty => bounty._id === bountyId)
//     // const foundBounty = bounties[bountyIndex]- **if finding by index. ** .find() returns the actual element **
//     if(!foundBounty) {
//         const error = new Error(`The bounty id ${bountyId} is not found.`)
//         res.status(500)
//         return next(error)
//     }
//     res.status(200).send(`you found the bounty ${foundBounty.firstName} ${JSON.stringify(foundBounty)}`) //lastName?
// 

//update one//
bountyRouter.put("/:bountyId", (req, res, next) => {
    Bounty.findOneAndUpdate(
        { _id: req.params.bountyId },  //find this one to update
        req.body,  //update the obj with this data  (can update whatever ie: {title: "Something else"})
        { new: true },  //send back the updated version please
        (err, updatedBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }
    )
    //old way//
        // const bountyId = req.params.bountyId
        // const newBounty = req.body
        // const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        // Object.assign(bounties[bountyIndex], newBounty)  //could also just use req.body and not save var for newBounty
        // res.status(201).send(bounties)
    })

//edit/update living status("execute" feature)with put request//
bountyRouter.put("/bountied/:bountyId", (req, res) => {
        
    
        // const bountyId = req.params.bountyId
        // const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        // bounties[bountyIndex].living = false
        // res.send(bounties)
})

//delete one//
bountyRouter.delete("/:bountyId", (req, res) => {
    Bounty.findOneAndDelete(
        { _id: req.params.bountyId }, 
        (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`successfully deleted item ${deletedItem.firstName} ${deletedItem.lastName} from the database`)
    })
    //old way//
        // const bountyId = req.params.bountyId
        // const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        // bounties.splice(bountyIndex, 1)
        // res.send(bounties)
    })

module.exports = bountyRouter