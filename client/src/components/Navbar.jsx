import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6'

const Navbar = () => {
    const [isMobileMenu, setIsMobileMenu] = useState(false)

    const handleMenuToggler = () => {
        setIsMobileMenu(!isMobileMenu)
    }

    const navItems = [
        { path: 'my-job', title: 'My Jobs' },
        { path: 'post-job', title: 'Post a Job' },
        { path: '/about-us', title: 'About' },
        { path: '/contact-us', title: 'Contact' },
    ]

    return (
        <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
            <nav className="flex items-center justify-between py-6">
                <NavLink
                    to={'/'}
                    className="flex items-center gap-2 text-2xl text-black"
                >
                    <span className="font-bold text-primary">Job Room</span>
                </NavLink>

                {/* NAV ITEMS */}
                <ul className="hidden md:flex lg:gap-8 md:gap-4">
                    {navItems.map(({ path, title }) => (
                        <li
                            key={path}
                            className="lg:text-base md:text-sm text-black"
                        >
                            {' '}
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    isActive ? 'active' : ''
                                }
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* REGISTER AND LOGIN */}
                <div className="text-base text-primary font-medium space-x-5 hidden md:block">
                    <Link to={'/login'} className="py-2 px-5 rounded border">
                        Login
                    </Link>
                    <Link
                        to={'/register'}
                        className="py-2 px-5 rounded border bg-red-500 text-white"
                    >
                        Register
                    </Link>
                </div>

                {/* MOBILE VIEW */}
                <div className="md:hidden block">
                    <button onClick={handleMenuToggler}>
                        {isMobileMenu ? (
                            <FaXmark className="w-5 h-5 text-primary" />
                        ) : (
                            <FaBarsStaggered className="w-5 h-5 text-primary" />
                        )}
                    </button>
                </div>
            </nav>

            <div
                className={`px-4 bg-black py-5 rounded ${
                    isMobileMenu ? '' : ' hidden'
                } md:hidden`}
            >
                <ul>
                    {navItems.map(({ path, title }) => (
                        <li
                            key={path}
                            className="text-base text-white first:text-primary py-1"
                        >
                            {' '}
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    isActive ? 'active' : ''
                                }
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))}

                    <li className="my-3">
                        {' '}
                        <Link
                            to={'login'}
                            className="py-2 px-5 rounded font-semibold text-red-500 border bg-white border-red-500"
                        >
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar
