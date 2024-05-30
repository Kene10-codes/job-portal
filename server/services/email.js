const nodemailer = require('nodemailer')

module.exports.sendEmail = function (user, subject, text, moreInfo) {
    const { email } = user
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
    })

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: subject,
        text: text,
        html: moreInfo,
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            throw new Error('Sending email fails')
        } else {
            console.log('Email sent: ' + info.response)
        }
    })
}
