const express = require('express')
const {
    registerController,
    loginController,
} = require('../controllers/talentController')
const auth = require('../middlewares/jwt')
const router = express()

router.post('/register', registerController)
router.post('/login', loginController)

module.exports = router
