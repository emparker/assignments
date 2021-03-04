const express = require('express')
const bountyRouter = express.Router()
const uuid = require('uuid').v4 



const bounties = [
    {firstName: "dark", lastName: "helmut", living: true, bounty: 60, type: "Bad", _id: uuid() },
    {firstName: "barf", lastName: "mcbarf", living: true, bounty: 170, type: "Good", _id: uuid()},
    {firstName: "lone", lastName: "starr", living: true, bounty: 5000, type: "Good", _id: uuid()},
    {firstName: "yogurt", lastName: "n/a", living: true, bounty: 10000, type: "Good", _id: uuid()},
    {firstName: "prince", lastName: "valium", living: true, bounty: 2, type: "Bad", _id: uuid()},
]

//get all and create one
bountyRouter.route("/")
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuid()
        bounties.push(newBounty)
        res.send({
            newBounty, 
            status: `you have sent ${newBounty.firstName} ${newBounty.lastName} with a bounty of ${newBounty.bounty} to your database!`})
            //there is a res.status method to use later once learned or need 
    })
    
//GET one
bountyRouter.get("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty= bounties.find(bounty => bounty._id === bountyId)
    // const foundBounty = bounties[bountyIndex]- if finding by index.  .find() returns the actual element
    res.send(`you found the bounty ${foundBounty.firstName} ${JSON.stringify(foundBounty)}`) //lastName?
})

bountyRouter.put("/:bountyId", (req, res) => {
        const bountyId = req.params.bountyId
        const newBounty = req.body
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        Object.assign(bounties[bountyIndex], newBounty)  //could also just use req.body and not save var newBounty
        res.send(bounties)
    })

//edit for put request
bountyRouter.put("/bountied/:bountyId", (req, res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        bounties[bountyIndex].living = false
        res.send(bounties)
})
    
bountyRouter.delete("/:bountyId", (req, res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        bounties.splice(bountyIndex, 1)
        res.send(bounties)
    })

module.exports = bountyRouter