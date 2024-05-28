import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import About from '../pages/About'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
        children: [{ path: '/about-us', element: <About /> }],
    },
])

export default router
