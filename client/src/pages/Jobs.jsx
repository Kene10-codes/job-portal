import { Link } from 'react-router-dom'

const Jobs = ({ result }) => {
    const {
        jobTitle,
        companyLogo,
        companyName,
        description,
        employmentType,
        experienceLevel,
        jobLocation,
        maxPrice,
        minPrice,
        postingDate,
        salaryType,
    } = result
    return (
        <section className="card">
            <Link
                to={'/'}
                className="flex gap-4 flex-col sm:flex-row items-start"
            >
                <img
                    src={companyLogo}
                    alt="company logo"
                    className="w-10 h-auto"
                />
                <div className="card-details">
                    <h4 className="text-red-500 mb-1">{companyName}</h4>
                </div>
            </Link>
        </section>
    )
}

export default Jobs
