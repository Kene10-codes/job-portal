const express = require('express')
const { registerController } = require('../controllers/talentController')
const auth = require('../middlewares/jwt')
const router = express()

router.post('/register', registerController)

module.exports = router
