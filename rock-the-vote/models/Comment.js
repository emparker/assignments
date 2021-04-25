const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    text: {
        type: String
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        
    },
    issue: {
        type: Schema.Types.ObjectId,
        ref: "Issue",
        
    }
})

module.exports = mongoose.model("Comment", commentSchema)