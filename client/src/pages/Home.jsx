import { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import { BASE_URL } from '../constants/constants'
import Card from '../components/Card'
import Jobs from './Jobs'

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('')
    const [jobs, setJob] = useState([])
    const [query, setQuery] = useState('')

    // FETCH JOBS
    useEffect(() => {
        fetch(`${BASE_URL}/api/user`)
            .then((response) => response.json())
            .then((data) => setJob(data.message))
    }, [])

    // HANDLE INPUT CHANGE FUNC
    const handleInputChange = (e) => {
        setQuery(e.target.value)
    }

    // FLTERED ITEMS
    const filteredItems = jobs.filter(
        (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
    )

    // RADIO FILTERING
    const handleChange = (e) => {
        setSelectedCategory(e.target.value)
    }

    const handleClick = (e) => {
        setSelectedCategory(e.target.value)
    }

    const filteredData = (jobs, selected, query) => {
        let filteredJobs = jobs

        // FILTER INPUT DATA
        if (query) {
            filteredJobs = filteredItems
        }

        if (selected) {
            filteredJobs = filteredJobs.filter(
                ({
                    jobLocation,
                    maxPrice,
                    minPrice,
                    postingDate,
                    salaryType,
                    experienceLevel,
                    employmentType,
                }) =>
                    parseInt(maxPrice) <= parseInt(selected) ||
                    parseInt(minPrice) >= parseInt(selected) ||
                    salaryType.toLowerCase() === selected.toLowerCase() ||
                    jobLocation.toLowerCase() === selected.toLowerCase() ||
                    employmentType.toLowerCase() === selected.toLowerCase() ||
                    experienceLevel.toLowerCase() === selected.toLowerCase()
            )
        }

        return filteredJobs.map((data, index) => (
            <Card key={index} data={data} />
        ))
    }

    let result = filteredData(jobs, selectedCategory, query)

    return (
        <div>
            <Navbar />
            <Banner
                query={query}
                handleInputChange={handleInputChange}
                handleChange={handleChange}
                selectedCategory={selectedCategory}
            />
            <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
                <div className="bg-white p-4 rounded">Left</div>
                <div className="col-span-2 bg-white p-4 rounded-sm">
                    {' '}
                    {result.map(({ props: { data } }, index) => (
                        <Jobs result={data} key={index} />
                    ))}
                </div>
                <div className="bg-white p-4 rounded">Right</div>
            </div>
        </div>
    )
}

export default Home
