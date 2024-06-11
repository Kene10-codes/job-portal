const bcryptjs = require('bcryptjs')
const Talent = require('../models/talentModel')
const {
    registerTalentValidator,
    loginTalentValidator,
} = require('../validator/talent/talent.Validator')
const { sendEmail } = require('../services/email')

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

    // SEND EMAIL
    sendEmail(
        talent,
        'Account created successfully - Verify Email',
        '',
        `<div
    class="container"
    style="max-width: 90%; margin: auto; padding-top: 20px"
  >
    <h2>Welcome onboard</h2>
    <h4>You are officially In ✔</h4>
    <p style="margin-bottom: 30px;">Pleas enter the sign up OTP to get started</p>
    <h1 style="font-size: 40px; letter-spacing: 2px; text-align:center;">${talent.otp}</h1>
</div>`
    )

    // GENERATE TOKEN
    const token = talent.generateToken()

    res.cookie('token', talent.email, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
    })
        .header('x-auth-token', token)
        .status(201)
        .json({ message: 'Talent profile successfully created' })
}

// LOGIN CONTROLLER
const loginController = async (req, res) => {
    try {
        const { error } = loginTalentValidator.validate(req.body)
        // CHECK ERROR
        if (error)
            return res.status(400).json({ error: error.details[0].message })

        // CHECK IF EMAIL
        const user = await Talent.findOne({ email: req.body.email })

        if (!user)
            return res
                .status(400)
                .json({ error: 'Email/password is incorrect' })

        const confirmPassword = bcryptjs.compare(
            req.body.password,
            user.password
        )

        if (!confirmPassword)
            return res
                .status(400)
                .json({ error: 'Email/Password is incorrect' })

        const token = user.generateToken()
        res.cookie('token', token)
            .status(200)
            .json({ messaage: 'Talent logged in successfully' })
    } catch (e) {
        console.log(e)
    }
}

module.exports = { registerController, loginController }
