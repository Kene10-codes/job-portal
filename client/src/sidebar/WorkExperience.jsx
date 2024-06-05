import React from 'react'

const WorkExperience = ({ handleChange }) => {
    return (
        <div>
            <h4 className="text-lg font-medium mmb-2">Work Experience</h4>

            <div>
                <label className="sidebar-label-container">
                    <input
                        type="radio"
                        name="location"
                        id="location"
                        value=""
                        onChange={handleChange}
                    />
                    <span className="checkmark"></span>Any Experience
                </label>

                <InputField
                    handleChange={handleChange}
                    name="location"
                    title="Internship"
                    value={'Internship'}
                />

                <InputField
                    handleChange={handleChange}
                    name="location"
                    title="Work remotely"
                    value={'work remotely'}
                />

                <InputField
                    handleChange={handleChange}
                    name="location"
                    title="< 80,000k"
                    value={80}
                />

                <InputField
                    handleChange={handleChange}
                    name="location"
                    title="< 100,000k"
                    value={100}
                />
            </div>
        </div>
    )
}

export default WorkExperience
