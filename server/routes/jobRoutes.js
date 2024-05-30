const express = require('express')
const { postJob } = require('../controllers/jobsControllers')
const upload = require('../middlewares/multer')
const router = express()

router.post('/post-job', upload.single('file'), postJob)

module.exports = router
