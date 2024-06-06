import React from 'react'
import InputField from '../components/InputField'

const Location = ({ handleChange }) => {
    return (
        <div>
            <h4 className="text-lg font-medium mb-2">Location</h4>

            <div>
                <label className="sidebar-label-container">
                    <input
                        type="radio"
                        name="location"
                        id="location"
                        value=""
                        onChange={handleChange}
                    />
                    <span className="checkmark"></span>All
                </label>

                <InputField
                    handleChange={handleChange}
                    type="radio"
                    name="location"
                    title="London"
                    value="london"
                />

                <InputField
                    handleChange={handleChange}
                    type="radio"
                    name="location"
                    title="Seattle"
                    value="seattle"
                />

                <InputField
                    handleChange={handleChange}
                    type="radio"
                    name="location"
                    title="London"
                    value="london"
                />

                <InputField
                    handleChange={handleChange}
                    type="radio"
                    name="location"
                    title="Madrid"
                    value="madrid"
                />

                <InputField
                    handleChange={handleChange}
                    type="radio"
                    name="location"
                    title="Boston"
                    value="boston"
                />
            </div>
        </div>
    )
}

export default Location
