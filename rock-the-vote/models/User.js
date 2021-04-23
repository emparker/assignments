const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    memeberSince: {
        type: Date,
        default: Date.now
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    // issue: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Issue",
    //     required: true
    // }
})

module.exports = mongoose.model("User", userSchema)