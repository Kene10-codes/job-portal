const express = require('express')
const {
    registerController,
    loginController,
    validateTalentRegister,
} = require('../controllers/talentController')
const auth = require('../middlewares/jwt')
const router = express()

router.post('/register', registerController)
router.post('/login', loginController)
router.post('/verifyTalent', validateTalentRegister)

module.exports = router
