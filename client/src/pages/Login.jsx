import React, { useState } from 'react'
import InputField from '../components/InputField'

const initialValues = {
    email: '',
    password: '',
}
const Login = () => {
    const [values, setValues] = useState(initialValues)

    const handleInputChange = (e) => {
        e.preventDefault()

        const { value } = e.target

        // UPDATE USER VALUES
        setValues({
            [name]: value,
        })
    }

    console.log(values)
    return (
        <div>
            <form>
                <InputField
                    handleChange={handleInputChange}
                    type="email"
                    name="email"
                    title="Email"
                    value={values.email}
                />

                <InputField
                    handleChange={handleInputChange}
                    type="password"
                    name="email"
                    title="Email"
                    value={values.password}
                />

                <InputField
                    handleChange={handleInputChange}
                    type="submit"
                    name="email"
                    title="Email"
                    value={values.password}
                />
            </form>
        </div>
    )
}

export default Login
