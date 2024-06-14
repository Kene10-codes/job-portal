const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const Talent = require('../models/talentModel')
const {
    registerTalentValidator,
    loginTalentValidator,
    resetPasswordValidator,
} = require('../validator/talent/talent.Validator')
const { sendEmail } = require('../services/email')
const { generateOTP } = require('../services/otp')
const { Token } = require('../models/token')

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
    talent.otp = generateOTP()

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

    res.cookie('email', talent.email, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
    })

    res.header('x-auth-token', token)
        .status(201)
        .json({ success: true, message: 'Talent profile successfully created' })
}

// VALIDATE USER REGISTER
const validateTalentRegister = async (req, res) => {
    try {
        const { otp } = req.body
        const email = req.cookies.email
        const talent = await Talent.findOne({ email })

        if (!talent)
            return res
                .status(401)
                .json({ success: false, message: 'Talent does not exist' })

        if (talent && talent.otp !== otp)
            return res
                .status(401)
                .json({ success: false, message: 'Incorrect OTP' })

        // UPDATE ACTIVE STATE
        let updatedTalent = await Talent.findByIdAndUpdate(
            talent._id,
            {
                $set: { active: true },
            },
            { new: true }
        )

        // SEND EMAIL
        sendEmail(
            talent,
            'Account Successfully Verified',
            '',
            `<div
    class="container"
    style="max-width: 90%; margin: auto; padding-top: 20px"
  >
    <h2>Dear, ${updatedTalent.firstName}</h2>
    <h4>You are officially In Again ✔</h4>
    <h1 style="font-size: 40px; letter-spacing: 2px; text-align:center;">You account has been successfully updated.</h1>
</div>`
        )
        res.status(200).json({ message: 'Talent successfully verified' })
    } catch (e) {
        console.log(e)
    }
}

// LOGIN CONTROLLER
const loginController = async (req, res) => {
    try {
        const { error } = loginTalentValidator.validate(req.body)
        // CHECK ERROR
        if (error)
            return res
                .status(400)
                .json({ success: false, message: error.details[0].message })

        // CHECK IF EMAIL
        const user = await Talent.findOne({ email: req.body.email })

        if (!user)
            return res.status(401).json({
                success: false,
                message: 'Email/password is incorrect',
            })

        const confirmPassword = bcryptjs.compare(
            req.body.password,
            user.password
        )

        if (!confirmPassword)
            return res.status(401).json({
                success: false,
                message: 'Email/Password is incorrect',
            })

        const token = user.generateToken()
        res.cookie('token', token)
            .status(200)
            .json({ success: true, messaage: 'Talent logged in successfully' })
    } catch (e) {
        console.log(e)
    }
}

// RESET PASSWORD CONTROLLER
const resetPasswordController = async (req, res) => {
    const { error } = resetPasswordValidator.validate(req.body)
    if (error)
        return res
            .status(400)
            .json({ success: false, message: 'Invalid email' })

    // CHECK EMAIL
    const talent = await Talent.findOne({ email: req.body.email })

    if (!talent)
        return res
            .status(400)
            .json({ success: false, message: 'Talent email does not exist!' })

    // CHECK IF TOKEN EXISTS ALREADY
    let token = await Token.findOne({ talentId: talent._id })
    if (!token) {
        token = new Token({
            talentId: talent._id,
            token: crypto.randomBytes(32).toString('hex'),
        }).save()
    }

    const link = `${process.env.BASE_URL}/password-reset/${talent._id}/${token.token}`

    sendEmail(
        talent,
        'Reset Password',
        '',
        `<div
class="container"
style="max-width: 90%; margin: auto; padding-top: 20px"
>
<h2>Dear,</h2>x
<p style="font-size: 40px; letter-spacing: 2px; text-align:center;">Click the link to reset your password. ${link} </p>

</div>`
    )

    res.status(200).json({ success: true, message: 'Password reset initated' })
}

module.exports = {
    registerController,
    loginController,
    validateTalentRegister,
    resetPasswordController,
}
