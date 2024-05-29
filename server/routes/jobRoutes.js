const express = require('express')
const { postJob } = require('../controllers/jobsControllers')
const router = express()

router.post('/post-job', postJob)

module.exports = router
