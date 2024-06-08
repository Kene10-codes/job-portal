const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    // READ COOKIE
    const cookie = req.cookies

    if (!cookie) return res.status(400).json({ error: 'No token provided!' })

    try {
        // VERIFY TOKEN PROVIDED
        const decodedToken = jwt.verify(cookie, process.env.JWT_PRIVATE_KEY)
        req.user = decodedToken
        next()
    } catch (e) {
        // console.log(e.message)
    }
}
