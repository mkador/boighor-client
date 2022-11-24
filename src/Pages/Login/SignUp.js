import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import signup from '../../assets/images/signup.jpg'
import { AuthContext } from '../../Contexts/AuthProvider'

const SignUp = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const {
    signInWithGoogle,
    user,
    createUser,
    updateUserProfile,
    loading,
    setLoading,
  } = useContext(AuthContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const image = e.target.image.files[0]
    const email = e.target.email.value
    const password = e.target.password.value

    console.log(name, email, password, image)

    const formData = new FormData()
    formData.append('image', image)

    const uri =
      'https://api.imgbb.com/1/upload?key=40842a18d7480a934e08c84577245887'
    fetch(uri, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.display_url)
        createUser(email, password)
          .then((result) => {
            updateUserProfile(name, data.data.display_url)
              .then(() => {
                toast.success('Please, Check Your email')
              })
              .catch((error) => console.error(error))
          })
          .catch((error) => {
            console.error(error)
            setLoading(false)
          })
      })
      .catch((error) => console.error(error))
  }

  const handleGooglePopUpLogin = () => {
    signInWithGoogle().then((result) => console.log(result.user))
    navigate(from, { replace: true })
  }

  return (
    <div className="grid lg:grid-cols-2 pr-20 pb-12 pl-20">
      <div className="justify-center items-center">
        <img src={signup} alt="" className="w-100 text-center" />
      </div>
      <div className="flex justify-center items-center pt-5">
        <div className="flex flex-col max-w-md font-mono  rounded-md sm:p-10 bg-base-600 text-gray-900">
          <div className="mb-2 text-center">
            <h1 className="my-2 text-4xl font-bold">Signup</h1>
            <p className="text-sm text-gray-400">Create a new account</p>
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
                <label htmlFor="image" className="block mb-2 text-sm">
                  Select Image:
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  // required
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
                <button type="submit">Sign up</button>
              </div>
            </div>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Signup with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleGooglePopUpLogin}
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
          <p className="px-6 text-sm text-center text-gray-400">
            Already have an account yet?{' '}
            <Link
              to="/login"
              className="hover:underline text-bold text-green-600"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp
