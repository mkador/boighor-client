import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import Blog from '../Pages/Blog/Blog'
import Categories from '../Pages/Home/Categories'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import SignUp from '../Pages/Login/SignUp'
import ErrorPage from '../Pages/Shared/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
      {
        path: '/categories',
        element: <Categories></Categories>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
    ],
  },
])

export default router
