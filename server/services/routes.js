const cors = require('cors')
const helmet = require('helmet')
const express = require('express')
const passport = require('passport')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const jobRoutes = require('../routes/jobRoutes')

module.exports = function (app) {
    app.use(helmet())
    app.use(
        cors({
            origin: ['http://localhost:5173'],
        })
    )
    app.use(
        session({
            resave: false,
            saveUninitialized: true,
            secret: process.env.COOKIE_KEY,
        })
    )
    app.use(cookieParser())
    app.use(passport.session())
    app.use(passport.initialize())
    app.use(express.json({ limit: '10MB' }))
    app.use(express.urlencoded({ extended: true }))

    // JOB ROUTE
    app.use('/api/user', jobRoutes)
}
