const InputField = ({ name, value, title, handleChange }) => {
    return (
        <label className="sidebar-label-container">
            <input
                type="radio"
                onChange={handleChange}
                value={value}
                name={name}
            />
            <span className="checkmark"></span>
            {title}
        </label>
    )
}

export default InputField
