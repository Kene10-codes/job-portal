import React from 'react'
import Location from './Location'
import Salary from './Salary'
import JobPostingData from './JobPostingData'
import EmployementType from './EmployementType'

const Sidebar = ({ handleChange, handleClick }) => {
    return (
        <div className="space-y-5">
            <h3 className="text-lg  font-bold mb-3">Filters</h3>
            <Location handleChange={handleChange} />
            <Salary handleChange={handleChange} handleClick={handleClick} />
            <JobPostingData
                handleChange={handleChange}
                handleClick={handleClick}
            />
            <EmployementType handleChange={handleChange} />
        </div>
    )
}

export default Sidebar
