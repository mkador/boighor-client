import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/boighor.jpg'
import { AuthContext } from '../../Contexts/AuthProvider'

const Navbar = () => {
  const { user, logout } = useContext(AuthContext)

  const menuitems = (
    <React.Fragment>
      <li>
        <Link to="/" className="text-xl  font-mono">
          Home
        </Link>
      </li>
      <li>
        <Link className="text-xl  font-mono">About</Link>
      </li>
      <li>
        <Link to="/blog" className="text-xl  font-mono">
          Blog
        </Link>
      </li>
    </React.Fragment>
  )
  return (
    <div className="navbar bg-base-300 pb-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuitems}
          </ul>
        </div>
        <div className="flex gap-3 mt-4">
          <Link to="/">
            <img className="w-20 rounded-full" src={logo} alt="" />
          </Link>
          <Link to="/" className="mr-4 text-3xl mt-6 text-bold font-mono">
            BoiGhor
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuitems}</ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <Link onClick={logout} className="btn btn-success mr-3  font-mono">
            Log Out
          </Link>
        ) : (
          <Link to="/login" className="btn btn-success mr-3 font-mono">
            Login
          </Link>
        )}

        <Link to="/signup" className="btn btn-success mr-3 font-mono">
          Sign Up
        </Link>
      </div>
    </div>
  )
}

export default Navbar
