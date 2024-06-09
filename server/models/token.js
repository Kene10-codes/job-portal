const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tokenSchema = new Schema({
    talentId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'talent',
    },
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 3600,
    },
})

const Token = mongoose.model('token', tokenSchema)

// EXPORT SCHEMA
exports.Token = Token
