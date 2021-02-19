const express = require('express')
const bountyRouter = express.Router()
const uuid = require('uuid').v4 

const bounties = [
    {firstName: "dark", lastName: "helmut", living: true, bounty: 60, type: "sith", _id: uuid() },
    {firstName: "barf", lastName: "mcbarf", living: true, bounty: 170, type: "jedi", _id: uuid()},
    {firstName: "lone", lastName: "starr", living: true, bounty: 5000, type: "jedi", _id: uuid()},
    {firstName: "yogurt", lastName: "n/a", living: true, bounty: 10000, type: "jedi", _id: uuid()},
    {firstName: "prince", lastName: "valium", living: true, bounty: 2, type: "sith", _id: uuid()},
]

bountyRouter.route("/")
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuid()
        bounties.push(newBounty)
        res.send(`you have sent ${newBounty.firstName}${newBounty.lastName} with a bounty of ${newBounty.bounty} to your database!`)
    })
    
bountyRouter.put("/:bountyId", (req, res) => {
        const bountyId = req.params.bountyId
        const newBounty = req.body
        const bountyIndex = bounties.findIndex(bounty => bounty._id ===bountyId)
        const updatedBounty = Object.assign(bounties[bountyIndex], newBounty)  //could also just use req.body and not save var newBounty
            res.send(`you have updated ${updatedBounty.firstName}`)
    })
    
bountyRouter.delete("/:bountyId", (req, res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        bounties.splice(bountyIndex, 1)
        res.send(`you made a successful delete!`)
    })

module.exports = bountyRouter