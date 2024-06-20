import React, { useState } from 'react'
import { BASE_URL } from '../constants/constants'

const initialState = {
    email: '',
    password: '',
}

const Login = () => {
    const [values, setValues] = useState(initialState)

    // HANDLE INPUT CHANGE
    const handleInputChange = (e) => {
        const { value, name } = e.target
        // SET VALUES
        setValues({
            ...state,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`${BASE_URL}/api/talent/login`, {
            method: 'POST',
            body: JSON.stringify({
                email: values.email,
                password: values.password,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => console.log(data))

        setErrMsg('')
    }

    return (
        <div className=" bg-red-500 h-screen-full">
            <div className="flex justify-center items-center pt-10">
                <form method="post" className="w-form  p-5 bg-white">
                    <h2 className="font-semibold uppercase text-xl py-5 text-center text-red-500">
                        Log In
                    </h2>

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

                    <input
                        type="submit"
                        value={'Log In'}
                        onClick={handleSubmit}
                        className="py-2 mt-6 border-red-500 border hover:bg-red-500 hover:text-white text-red-500 font-bold  cursor-pointer"
                    />
                </form>
            </div>
        </div>
    )
}

export default Login
