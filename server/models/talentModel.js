const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
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
    state: {
        type: String,
        trim: true,
        required: true,
    },
    lastActive: {
        type: String,
        required: false,
    },
    otp: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: false,
    },
})

// GENERATE A TOKEN
talentSchema.methods.generateToken = async () => {
    return jwt.sign({ id: this._id }, process.env.JWT_PRIVATE_KEY, {
        expiresIn: '1d',
    })
}

const Talent = mongoose.model('talent', talentSchema)

module.exports = Talent
