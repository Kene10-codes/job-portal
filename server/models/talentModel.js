const mongoose = require('mongoose')
const Schema = mongoose.Schema

const talentSchema = new Schema({
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
    gender: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        minlength: 6,
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
    country: {
        type: String,
        trim: true,
        required: true,
    },
    stateOfResidence: {
        type: String,
        trim: true,
        required: true,
    },
})

const Talent = mongoose.model('Talent', talentSchema)

module.exports = Talent
