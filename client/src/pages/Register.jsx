import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../constants/constants'

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    password: '',
    confirmPassword: '',
    country: '',
    state: '',
}
const Register = () => {
    const [values, setValues] = useState(initialState)
    const [countries, setCountries] = useState([])
    const [err, setErrMsg] = useState('')

    console.log(values)

    // GET ALL COUNTRIES
    useEffect(() => {
        fetch('https://countriesnow.space/api/v0.1/countries')
            .then((response) => response.json())
            .then((data) => {
                setCountries(data.data)
            })
            .catch((e) => setErrMsg(e))
    }, [])

    // HANDLE INPUT CHANGE
    const handleInputChange = (e) => {
        const { value, name } = e.target
        // SET VALUES
        setValues({
            ...values,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.password !== values.confirmPassword) {
            setErrMsg('Password do not match')
            return
        }

        const data = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            gender: values.gender,
            password: values.password,
            country: values.country,
            state: values.state,
        }

        fetch(`${BASE_URL}/api/talent/register`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json;',
                // 'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data),
        }).then((response) => response.json())
        // .then((data) => console.log(data))

        setErrMsg('')
    }

    return (
        <div className=" bg-red-500 h-screen-full">
            <div className="flex justify-center items-center pt-10">
                <form method="post" className="w-form  p-5 bg-white">
                    <h2 className="font-semibold uppercase text-xl py-5 text-center text-red-500">
                        Registration
                    </h2>
                    <div className="flex flex-col my-2">
                        {' '}
                        <label
                            htmlFor="lastname"
                            className="text-2 text-gray-600 pb-1 text-md"
                        >
                            Lastname
                        </label>
                        <input
                            type="text"
                            value={values.lastName}
                            onChange={handleInputChange}
                            name="lastName"
                            className="border w-96 outline-none pl-2 text-sm h-8"
                            required
                        />
                    </div>
                    <div className="flex flex-col my-2">
                        {' '}
                        <label
                            htmlFor="firstname"
                            className="text-2 text-gray-600 pb-1 text-md"
                        >
                            Firstname
                        </label>
                        <input
                            type="text"
                            value={values.firstName}
                            onChange={handleInputChange}
                            name="firstName"
                            className="border w-96 outline-none pl-2 text-sm h-8"
                            required
                        />
                    </div>

                    <div className="flex flex-col my-2">
                        {' '}
                        <label
                            htmlFor="email"
                            className="text-2 text-gray-600 pb-1 text-md"
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            value={values.email}
                            onChange={handleInputChange}
                            id="email"
                            name="email"
                            className="border w-96 outline-none pl-2 text-sm h-8"
                            required
                        />
                    </div>

                    <div className="flex flex-col my-2">
                        {' '}
                        <label
                            htmlFor="password"
                            className="text-2 text-gray-600 pb-1 text-md"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            value={values.password}
                            onChange={handleInputChange}
                            id="password"
                            name="password"
                            className="border w-96 outline-none pl-2 text-sm h-8"
                            required
                        />
                    </div>
                    <div className="flex flex-col my-2">
                        {' '}
                        <label
                            htmlFor="password"
                            className="text-2 text-gray-600 pb-1 text-md"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            value={values.confirmPassword}
                            onChange={handleInputChange}
                            id="confirmPassword"
                            name="confirmPassword"
                            className="border w-96 outline-none pl-2"
                            required
                        />
                        {err ? (
                            <span className="text-red-500 text-xs py-1">
                                {err}
                            </span>
                        ) : (
                            ''
                        )}
                    </div>
                    <div className="flex flex-col my-2">
                        {' '}
                        <label
                            htmlFor="gender"
                            className="text-2 text-gray-600 pb-1 text-md"
                        >
                            Gender
                        </label>
                        <select
                            name="gender"
                            onChange={handleInputChange}
                            value={values.gender}
                            className="border w-96 outline-none pl-2 text-sm h-8"
                        >
                            <option value="gender">Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <div className="flex flex-col my-2">
                        {' '}
                        <label
                            htmlFor="country"
                            className="text-2 text-gray-600 pb-1 text-md"
                        >
                            Country
                        </label>
                        <select
                            name="country"
                            onChange={handleInputChange}
                            value={values.country}
                            className="border w-96 outline-none pl-2 text-sm h-8"
                        >
                            {countries?.map(({ country }) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* <div className="flex flex-col my-2">
                        {' '}
                        <label
                            htmlFor="state"
                            className="text-2 text-gray-600 pb-1 text-md"
                        >
                            State
                        </label>
                        <select
                            name="state"
                            onChange={handleInputChange}
                            value={values.state}
                            className="border w-96 outline-none pl-2 text-sm h-8"
                        >
                            {countries?.map(({ cities }) =>
                                cities?.map((state) => (
                                    <option key={state} value={state}>
                                        {state}
                                    </option>
                                ))
                            )}
                        </select> */}
                    <div className="flex flex-col my-2">
                        {' '}
                        <label
                            htmlFor="state"
                            className="text-2 text-gray-600 pb-1 text-md"
                        >
                            State
                        </label>
                        <input
                            type="text"
                            value={values.state}
                            onChange={handleInputChange}
                            id="state"
                            name="state"
                            className="border w-96 outline-none pl-2 text-sm h-8"
                            required
                        />
                    </div>
                    <div className="flex flex-col my-2">
                        <input
                            type="submit"
                            value={'Register'}
                            onClick={handleSubmit}
                            className="py-2 mt-6 border-red-500 border hover:bg-red-500 hover:text-white text-red-500 font-bold  cursor-pointer"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
