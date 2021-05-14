const express = require('express')
const issueRouter = express.Router()
const Issue = require("../models/Issue.js")

//Get All Issues
issueRouter.get("/", (req, res, next) => {
    Issue.find((err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

//Get Isssue by User
issueRouter.get("/by-user", (req, res, next) => {
    Issue.find({ author: req.user._id }, (err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

//Add New Issue
issueRouter.post("/", (req, res, next) => {
    req.body.author = req.user._id
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedIssue)
    })
})

//Delete Issue
issueRouter.delete("/:issueId", (req, res, next) => {
    Issue.findOneAndDelete(
        { _id: req.params.issueId, author: req.user._id },
        (err, deletedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successful Delete of issue: ${deletedIssue.title}`)
        }
    )
})

//Update Issue
issueRouter.put("/:issueId", (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId, author: req.user._id },
        req.body,
        { new: true },
        (err, updatedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        }
    )
})

//Post request for upVotes 
issueRouter.put("/up-vote/:issueId", async (req, res, next) => {
    try {
        const issue = await Issue.findOne({ _id: req.params.issueId})
        console.log(issue)
        if (issue.votes.upVotes.includes(req.user._id)) {
            return res.status(403).send('You can only vote once per issue!')
        }
        const updatedIssue = await Issue.findOneAndUpdate(
                        { _id: req.params.issueId },
                        {$addToSet: {"votes.upVotes": req.user._id}},
                        { new: true },
                    )
                    if (issue.votes.downVotes.includes(req.user._id)){
                        const removedFromDownVote = await Issue.findOneAndUpdate(
                            { _id: req.params.issueId },
                            {$pull: {"votes.downVotes": req.user._id}},
                            { new: true }
                        )
                        return res.status(201).send(removedFromDownVote)
                    }
                    return res.status(201).send(updatedIssue)
        } catch(err) {
                res.status(500)
                return next(err)
        }
})

//Post request for downVotes
issueRouter.put("/down-vote/:issueId", async (req, res, next) => {
    try {
        const issue = await Issue.findOne({ _id: req.params.issueId})
        if (issue.votes.downVotes.includes(req.user._id)) {
            return res.status(403).send('You can only vote once per issue!')
        }
        
        const updatedIssue = await Issue.findOneAndUpdate(
                        { _id: req.params.issueId },
                        {$addToSet: {"votes.downVotes": req.user._id}},
                        { new: true }
                    )
                    if (issue.votes.upVotes.includes(req.user._id)){
                        const removedFromUpVote = await Issue.findOneAndUpdate(
                            { _id: req.params.issueId },
                            {$pull: {"votes.upVotes": req.user._id}},
                            { new: true }
                        )
                        return res.status(201).send(removedFromUpVote)
                    }
                    return res.status(201).send(updatedIssue)
        } catch(err) {
                res.status(500)
                return next(err)
        }
})


module.exports = issueRouter
