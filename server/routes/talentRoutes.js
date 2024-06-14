const express = require('express')
const {
    registerController,
    loginController,
    validateTalentRegister,
    resetPasswordController,
} = require('../controllers/talentController')
const auth = require('../middlewares/jwt')
const router = express()

router.post('/register', registerController)
router.post('/login', loginController)
router.post('/verifyTalent', validateTalentRegister)
router.post('/reset-password', resetPasswordController)

module.exports = router
