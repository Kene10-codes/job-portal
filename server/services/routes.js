const cors = require('cors')
const helmet = require('helmet')
const express = require('express')
const passport = require('passport')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const jobRoutes = require('../routes/jobRoutes')
const talentRoutes = require('../routes/talentRoutes')

module.exports = function (app) {
    const corsOptions = {
        origin: [
            'http://localhost:5173',
            'https://job-portal-r4cl.onrender.com',
        ],
        credentials: true,
        methods: ['GET, POST', 'PUT', 'DELETE', 'PATCH'],
        allowHeaders: [
            'Content-Type',
            'Authorization',
            'Access-Control-Allow-Credentials',
        ],
    }
    app.use(helmet())
    app.use(cors(corsOptions))
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
    app.use('/api/client', jobRoutes)

    // TALENT ROUTE
    app.use('/api/talent', talentRoutes)
}
