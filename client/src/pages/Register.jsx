import React, { useState } from 'react'
import InputField from '../components/InputField'
import Button from '../components/Button'
import { BASE_URL } from '../constants/constants'

const initialState = {
    lastName: '',
    firstName: '',
    email: '',
    gender: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    country: '',
    state: '',
}
const Register = () => {
    const [values, setValues] = useState(initialState)
    const [err, setErrMsg] = useState('')

    // HANDLE INPUT CHANGE
    const handleInputChange = (e) => {
        const { value } = e.target

        setValues({
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.password !== values.confirmPassword) {
            setErrMsg('Password do not match')
        }

        // fetch(`${BASE_URL}`)

        setErrMsg('')
    }

    console.log(err)

    return (
        <div className=" bg-red-300 h-screen-full">
            <div className="flex justify-center items-center pt-10">
                <form method="post" className="w-form  p-5 bg-white">
                    <h2 className="font-semibold text-2xl pb-5 text-center text-red-700">
                        Talent Registration
                    </h2>
                    <div className="flex flex-col my-2">
                        {' '}
                        <label
                            htmlFor="lastname"
                            className="text-2 text-gray-600 pb-1"
                        >
                            Lastname
                        </label>
                        <input
                            type="text"
                            value={values.lastName}
                            onChange={handleInputChange}
                            id="lastname"
                            name="lastName"
                            className="border w-96 outline-none pl-2 text-sm h-8"
                            required
                        />
                    </div>
                    <div className="flex flex-col my-2">
                        {' '}
                        <label
                            htmlFor="firstname"
                            className="text-2 text-gray-600 pb-1"
                        >
                            Firstname
                        </label>
                        <input
                            type="text"
                            value={values.firstName}
                            onChange={handleInputChange}
                            id="firstname"
                            name="firstName"
                            className="border w-96 outline-none pl-2 text-sm h-8"
                            required
                        />
                    </div>

                    <div className="flex flex-col my-2">
                        {' '}
                        <label
                            htmlFor="email"
                            className="text-2 text-gray-600 pb-1"
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
                            className="text-2 text-gray-600 pb-1"
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
                            className="text-2 text-gray-600 pb-1"
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
                            className="text-2 text-gray-600 pb-1"
                        >
                            Gender
                        </label>
                        <input
                            type="text"
                            value={values.gender}
                            onChange={handleInputChange}
                            id="gender"
                            name="gender"
                            className="border w-96 outline-none pl-2 text-sm h-8"
                            required
                        />
                    </div>
                    <div className="flex flex-col my-2">
                        {' '}
                        <label
                            htmlFor="country"
                            className="text-2 text-gray-600 pb-1"
                        >
                            Country
                        </label>
                        <input
                            type="text"
                            value={values.country}
                            onChange={handleInputChange}
                            id="country"
                            name="country"
                            className="border w-96 outline-none pl-2 text-sm h-8"
                            required
                        />
                    </div>
                    <div className="flex flex-col my-2">
                        {' '}
                        <label
                            htmlFor="state"
                            className="text-2 text-gray-600 pb-1"
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
                        <input
                            type="submit"
                            value={'Register'}
                            onClick={handleSubmit}
                            className="py-2 mt-6 border-red-300 border hover:bg-red-400 hover:text-white text-red-400 font-bold  cursor-pointer"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
