const express = require('express')
const { registerController } = require('../controllers/talentController')
const router = express()

router.post('/register', registerController)

module.exports = router
