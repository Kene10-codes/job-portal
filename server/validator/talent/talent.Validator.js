const Joi = require('joi')

const registerTalentValidator = Joi.object({
    firstName: Joi.string().max(255).required(),
    lastName: Joi.string().max(255).required(),
    gender: Joi.string().max(6).required(),
    password: Joi.string().min(6).required(),
    email: Joi.string().max(255).email().required(),
    phoneNumber: Joi.string().max(15).required(),
    country: Joi.string().required(),
    stateOfResidence: Joi.string().required(),
})

// LOGIN VALIDATOR
const loginTalentValidator = Joi.object({
    email: Joi.string().max(255).email().required(),
    password: Joi.string().min(6).required(),
})

module.exports = { registerTalentValidator, loginTalentValidator }
