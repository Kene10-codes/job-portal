import Button from '../components/Button'
import InputField from '../components/InputField'

const JobPostingData = ({ handleClick, handleChange }) => {
    const now = new Date()

    const TwentFoursHoursAgo = new Date(now - 24 * 60 * 60 * 1000)
        .toISOString()
        .slice(0, 10)
    const SevenDaysAgo = new Date(now - 7 * (24 * 60 * 60 * 1000))
        .toISOString()
        .slice(0, 10)
    const ThirtyDaysAgo = new Date(now - 30 * (24 * 60 * 60 * 1000))
        .toISOString()
        .slice(0, 10)

    return (
        <div>
            <h4 className="text-lg font-medium mmb-2">Date of posting</h4>

            <div>
                <label className="sidebar-label-container">
                    <input
                        type="radio"
                        name="location"
                        id="location"
                        value=""
                        onChange={handleChange}
                    />
                    <span className="checkmark"></span>All Time
                </label>

                <InputField
                    handleChange={handleChange}
                    name="location"
                    title="24 Hours Ago"
                    value={TwentFoursHoursAgo}
                />

                <InputField
                    handleChange={handleChange}
                    name="location"
                    title="7 Days Ago"
                    value={SevenDaysAgo}
                />

                <InputField
                    handleChange={handleChange}
                    name="location"
                    title="30 Days Ago"
                    value={ThirtyDaysAgo}
                />
            </div>
        </div>
    )
}

export default JobPostingData
