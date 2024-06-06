import InputField from '../components/InputField'

const EmployementType = ({ handleChange }) => {
    return (
        <div>
            <h4 className="text-lg font-medium mmb-2">Employment Type</h4>

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
                    type="radio"
                    name="location"
                    title="Full-time"
                    value={'full-time'}
                />

                <InputField
                    handleChange={handleChange}
                    type="radio"
                    name="location"
                    title="Permanent"
                    value={'Permanent'}
                />

                <InputField
                    handleChange={handleChange}
                    type="radio"
                    name="location"
                    title="Part-time"
                    value={'part-time'}
                />
            </div>
        </div>
    )
}

export default EmployementType
