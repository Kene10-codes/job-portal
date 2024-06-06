const bcryptjs = require('bcryptjs')
const Talent = require('../models/talentModel')
const {
    registerTalentValidator,
} = require('../validator/talent/talent.Validator')

// REGISTER TALENT CONTROLLER
const registerController = async (req, res) => {
    const { error } = registerTalentValidator.validate(req.body)
    if (error) return res.status(400).json({ error: error.details[0].message })

    // CHECK IF USER EXISTS ALREADY
    const existingEmail = await Talent.findOne({ email: req.body.email })
    if (existingEmail)
        return res.status(400).json({ error: 'User email exists already' })

    // REGISTER USER
    let talent = new Talent({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        password: req.body.password,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        country: req.body.country,
        stateOfResidence: req.body.stateOfResidence,
    })

    // CHECK USER PASSWORD
    const salt = await bcryptjs.genSalt(10)
    talent.password = await bcryptjs.hash(req.body.password, salt)

    // SAVE TO DB
    await talent.save()
    res.status(201).json({ message: talent })
}

module.exports = { registerController }
