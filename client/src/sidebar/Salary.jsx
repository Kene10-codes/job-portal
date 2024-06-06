import Button from '../components/Button'
import InputField from '../components/InputField'

const Salary = ({ handleClick, handleChange }) => {
    return (
        <div>
            <h4 className="text-lg font-medium mmb-2">Salary</h4>
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
                    type="radio"
                    name="location"
                    title="< 30,000k"
                    value={30}
                />

                <InputField
                    handleChange={handleChange}
                    type="radio"
                    name="location"
                    title="< 50,000k"
                    value={50}
                />

                <InputField
                    handleChange={handleChange}
                    type="radio"
                    name="location"
                    title="< 80,000k"
                    value={80}
                />

                <InputField
                    handleChange={handleChange}
                    type="radio"
                    name="location"
                    title="< 100,000k"
                    value={100}
                />
            </div>
        </div>
    )
}

export default Salary
