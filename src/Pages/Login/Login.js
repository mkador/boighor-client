import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { setAuthToken } from '../../api/auth'
import login from '../../assets/images/login.png'
import { AuthContext } from '../../Contexts/AuthProvider'

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const { signIn, loading, setLoading, signInWithGoogle } = useContext(
    AuthContext,
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    console.log(email, password)

    signIn(email, password)
      .then((result) => {
        toast.success('Login Successfully')
        console.log(result.user)
        setAuthToken(result.user)
        navigate(from, { replace: true })
      })
      .catch((error) => {
        toast.error('Invalid Password')
        console.log(error)
        setLoading(false)
      })
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      console.log(result.user)
      setAuthToken({ ...result.user, user_type: 'buyer' })
      navigate(from, { replace: true })
    })
  }
  return (
    <div className="grid lg:grid-cols-2 pr-10 pb-12 pl-10">
      <div className="">
        <img src={login} alt="" className="w-100 justify-center items-center" />
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col max-w-md font-mono  rounded-md sm:p-10 bg-base-600 text-gray-900">
          <div className="mb-2 text-center">
            <h1 className="my-2 text-4xl font-bold">Login</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            noValidate=""
            action=""
            className="space-y-5 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-2">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Enter Your Name Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900"
                />
              </div>
            </div>
            <div className="">
              <div className="text-center btn btn-success w-full px-8  font-semibold rounded-md ">
                <button type="submit">Login</button>
              </div>
            </div>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleGoogleSignIn}
              aria-label="Log in with Google"
              className="p-3 text-center btn btn-success w-full px-8  font-semibold rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </button>
          </div>
          <p className="px-6 mt-3 text-sm text-center text-gray-400">
            Haven't an account?{' '}
            <Link
              to="/signup"
              className="hover:underline text-bold text-green-600"
            >
              Sign Up
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
