const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    upVotes: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    downVotes: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
})

module.exports = mongoose.model("Issue", issueSchema)