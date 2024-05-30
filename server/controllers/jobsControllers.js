const Jobs = require('../models/jobsModel')
const cloudinary = require('../services/cloudinary')
const { postJobValidator } = require('../validator/job/jobValidator')

// GET JOBS
const fetchJobs = async (req, res) => {
    try {
        const jobs = await Jobs.find()
        if (!jobs) return res.status(400).json({ message: 'No job available' })

        res.status(200).json({ message: jobs })
    } catch (e) {
        throw new Error(e)
    }
}

// POST JOB
const postJob = async (req, res) => {
    try {
        const { error } = postJobValidator.validate(req.body)
        if (error)
            return res.status(400).json({ error: error.details[0].message })

        const file = req.file

        const { path } = file
        let result = await cloudinary.uploader.upload(path)

        if (!result)
            return res.status(400).json({ error: 'Upload was not successful' })

        // DESTRUCTURE URL
        const { url } = result
        const Job = new Jobs({
            companyName: req.body.companyName,
            jobTitle: req.body.jobTitle,
            companyLogo: url,
            minPrice: req.body.minPrice,
            maxPrice: req.body.maxPrice,
            salaryType: req.body.salaryType,
            jobLocation: req.body.jobLocation,
            postingDate: req.body.postingDate,
            experienceLevel: req.body.experienceLevel,
            employmentType: req.body.employmentType,
            description: req.body.description,
        })

        // SAVE JOB
        await Job.save()
        res.status(200).json({ message: 'Job successfully created' })
    } catch (e) {
        throw new Error(e)
    }
}

module.exports = { fetchJobs, postJob }
