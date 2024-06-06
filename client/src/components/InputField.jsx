const InputField = ({ name, type, value, title, handleChange }) => {
    return (
        <label className="sidebar-label-container">
            <input
                type={type}
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
