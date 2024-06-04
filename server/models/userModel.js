const mongoose = require('express')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: true,
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    phoneNumber: {
        type: String,
        unique: true,
        required: true,
    },
})

const User = mongoose.model('User', userSchema)

module.exports = User
