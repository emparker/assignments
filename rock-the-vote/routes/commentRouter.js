const express = require("express");
const commentRouter = express.Router();
const Comment = require("../models/Comment.js");

//add a comment to an issue
commentRouter.post("/:issueId", (req, res, next) => {
  req.body.author = req.user._id;
  req.body.issue = req.params.issueId;
  console.log(req.body);
  // User.findOne({ author: req.user._id }, (err, comment))
  // Issue.findById(req.params.issueId)
  const newComment = new Comment(req.body);
  newComment.save((err, savedComment) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedComment);
  });
});

//get all comments based on an issue id
commentRouter.get("/:issueId", (req, res, next) => {
  //   Comment.find({ issue: req.params.issueId }, (err, comments) => {
  //     if (err) {
  //       res.status(500);
  //       return next(err);
  //     }
  //     return res.status(200).send(comments);
  //   });

  Comment.find({ issue: req.params.issueId })
    .populate("author", "username")
    .exec((err, comments) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(comments);
    });
});

//get author of commenter
// commentRouter.get("/:issueId/by-author", (req, res, next) => {
//     Comment.find({issue: req.params.issueId, author: req.user._id}, (err, authorName) => {
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(authorName)
//     })
// })

module.exports = commentRouter;
