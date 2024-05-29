const Jobs = require('../models/jobsModel')
const { postJobValidator } = require('../validator/job/jobValidator')

const postJob = async (req, res) => {
    try {
        const { error } = postJobValidator.validate(req.body)
        if (error) return res.status(400).send(error.details[0].message)

        const Job = new Jobs({
            companyName: req.body.companyName,
            jobTitle: req.body.jobTitle,
            companyLogo: req.body.companyLogo,
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
        throw new Error('Post Job controller encountered error')
    }
}

module.exports = { postJob }
