import Button from '../components/Button'
import InputField from '../components/InputField'

const JobPostingData = ({ handleClick, handleChange }) => {
    const now = new Date()

    const TwentFoursHoursAgo = new Date(now - 24 * 60 * 60 * 1000)
    const SevenDaysAgo = new Date(now - 7 * (24 * 60 * 60 * 1000))
    const ThirtyDaysAgo = new Date(now - 30 * (24 * 60 * 60 * 1000))
    TwentFoursHoursAgo.toISOString().slice(0, 10)
    SevenDaysAgo.toISOString().slice(0, 10)
    ThirtyDaysAgo.toISOString().slice(0, 10)

    return (
        <div>
            <h4 className="text-lg font-medium mmb-2">Date of posting</h4>
            <div className="mb-4">
                <Button onClickHandler={handleClick} value="" title="Hourly" />

                <Button
                    onClickHandler={handleClick}
                    value="monthly"
                    title="Monthly"
                />

                <Button
                    onClickHandler={handleClick}
                    value="yearly"
                    title="Yearly"
                />
            </div>

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
                    name="location"
                    title="Last 24 Hours"
                    value={TwentFoursHoursAgo}
                />

                <InputField
                    handleChange={handleChange}
                    name="location"
                    title="< 50,000k"
                    value={50}
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

export default JobPostingData
