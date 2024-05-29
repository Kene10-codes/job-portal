const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobSchema = new Schema(
    {
        companyName: {
            type: String,
            trim: true,
            maxlength: 255,
            required: true,
        },
        jobTitle: {
            type: String,
            trim: true,
            maxlength: 255,
            required: true,
        },
        companyLogo: {
            type: String,
            required: true,
        },
        minPrice: {
            type: String,
            required: true,
        },
        maxPrice: {
            type: String,
            required: true,
        },
        salaryType: {
            type: String,
            required: true,
        },
        jobLocation: {
            type: String,
            required: true,
        },
        postingDate: {
            type: Date,
            required: true,
        },
        experienceLevel: {
            type: String,
            required: true,
        },
        employmentType: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)

const Jobs = mongoose.model('job', jobSchema)

module.exports = Jobs
