const Joi = require('joi')

const postJobValidator = Joi.object({
    companyName: Joi.string().max(255).required(),
    jobTitle: Joi.string().max(255).required(),
    companyLogo: Joi.string().max(255).required(),
    minPrice: Joi.string().max(255).required(),
    maxPrice: Joi.string().max(255).required(),
    salaryType: Joi.string().max(255).required(),
    jobLocation: Joi.string().max(255).required(),
    postingDate: Joi.string().max(255).required(),
    experienceLevel: Joi.string().max(255).required(),
    employmentType: Joi.string().max(255).required(),
    description: Joi.string().max(255).required(),
})

module.exports = { postJobValidator }
