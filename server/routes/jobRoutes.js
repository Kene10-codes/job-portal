const express = require('express')
const { postJob, fetchJobs } = require('../controllers/jobsControllers')
const upload = require('../middlewares/multer')
const router = express()

router.get('/', fetchJobs)
router.post('/post-job', upload.single('file'), postJob)

module.exports = router
