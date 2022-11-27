import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import Blog from '../Pages/Blog/Blog'
import Categories from '../Pages/Home/Categories'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import SignUp from '../Pages/Login/SignUp'
import ErrorPage from '../Pages/Shared/ErrorPage'
import Products from '../Pages/Products/Products'
import Dashboard from '../Pages/Dashboard/Dashboard'
import AddProduct from '../Pages/Dashboard/AddProduct'
import PrivateRoute from './PrivateRoute'

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
        path: '/dashboard',
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        children: [
          {
            path: '/dashboard/addProduct',
            exact: true,
            element: (
              <PrivateRoute role="seller">
                <AddProduct></AddProduct>
              </PrivateRoute>
            ),
          },
        ],
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
        path: '/category/:id',
        element: <Products></Products>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
    ],
  },
])

export default router
