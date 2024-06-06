import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/Login'
import Register from '../pages/Register'
import MyJobs from '../pages/MyJobs'
import PostJob from '../pages/PostJob'
import Contact from '../pages/Contact'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            { path: 'about-us', element: <About /> },
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
            { path: 'my-job', element: <MyJobs /> },
            { path: 'post-job', element: <PostJob /> },
            { path: 'contact-us', element: <Contact /> },
        ],
        errorElement: <ErrorPage />,
    },
])

export default router
