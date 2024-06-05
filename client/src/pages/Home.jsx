import { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import { BASE_URL } from '../constants/constants'
import Card from '../components/Card'
import Jobs from './Jobs'
import Sidebar from '../sidebar/Sidebar'
import Newsletter from '../components/Newsletter'

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('')
    const [jobs, setJob] = useState([])
    const [query, setQuery] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 4

    // FETCH JOBS
    useEffect(() => {
        setIsLoading(true)
        fetch(`${BASE_URL}/api/user`)
            .then((response) => response.json())
            .then((data) => {
                setJob(data.message)
                setIsLoading(false)
            })
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

    // Calculate Page index
    const calculatePageRange = () => {
        const startIndex = (currentPage - 1) * itemsPerPage
        const endIndex = startIndex + itemsPerPage
        return {
            startIndex,
            endIndex,
        }
    }

    // Function for next page
    const nextPage = () => {
        if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1)
        }
    }

    // Function for prev page
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
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
                    postingDate >= selected ||
                    salaryType.toLowerCase() === selected.toLowerCase() ||
                    jobLocation.toLowerCase() === selected.toLowerCase() ||
                    employmentType.toLowerCase() === selected.toLowerCase() ||
                    experienceLevel.toLowerCase() === selected.toLowerCase()
            )
        }

        const { startIndex, endIndex } = calculatePageRange()

        filteredJobs = filteredJobs.slice(startIndex, endIndex)
        filteredJobs = filteredJobs.map((data, index) => (
            <Card key={index} data={data} />
        ))

        return filteredJobs
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
                <div className="bg-white p-4 rounded">
                    <Sidebar
                        handleChange={handleChange}
                        handleClick={handleClick}
                    />
                </div>
                <div className="col-span-2 bg-white p-4 rounded-sm">
                    {isLoading ? (
                        <h2 className="font-bold">Loading...</h2>
                    ) : result.length > 0 ? (
                        result.map(({ props: { data } }, index) => (
                            <Jobs result={data} key={index} />
                        ))
                    ) : (
                        <>
                            <h3 className="text-lg font-bold mb-2">
                                {result.length} Job
                            </h3>
                            <p>No data Found!</p>
                        </>
                    )}

                    {/* PAGINATION */}
                    {result.length > 0 ? (
                        <div className="flex justify-center mt-4 space-x-8">
                            <button
                                onClick={prevPage}
                                className="hover:underline"
                                disabled={currentPage === 1}
                            >
                                Prev
                            </button>
                            <span className="mx-2">
                                Page {currentPage} of{' '}
                                {Math.ceil(filteredItems.length / itemsPerPage)}
                            </span>
                            <button
                                onClick={nextPage}
                                disabled={
                                    currentPage ===
                                    Math.ceil(
                                        filteredItems.length / itemsPerPage
                                    )
                                }
                                className="hover:underline"
                            >
                                Next
                            </button>
                        </div>
                    ) : (
                        ''
                    )}
                </div>
                <div className="bg-white p-4 rounded">
                    <Newsletter />
                </div>
            </div>
        </div>
    )
}

export default Home
