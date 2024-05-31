import { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import { BASE_URL } from '../constants/constants'
import Card from '../components/Card'
import Jobs from './Jobs'

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [jobs, setJob] = useState([])
    const [query, setQuery] = useState('')

    // FETCH JOBS
    useEffect(() => {
        fetch(`${BASE_URL}/api/user`)
            .then((response) => response.json())
            .then((data) => setJob(data.message))
    }, [])

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

            console.log(filteredJobs)
        }

        return filteredJobs.map((data, index) => (
            <Card key={index} data={data} />
        ))
    }

    // HANDLE INPUT CHANGE FUNC
    const handleInputChange = (e) => {
        setQuery(e.target.value)
    }

    const result = filteredData(jobs, selectedCategory, query)

    return (
        <div>
            <Navbar />
            <Banner query={query} handleInputChange={handleInputChange} />
            <div>
                <Jobs result={result} />
            </div>
        </div>
    )
}

export default Home
