import React, { useContext } from 'react'

import useUserInfo from '../hooks/useUserInfo'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Contexts/AuthProvider'
import useUsersDetails from '../hooks/useUsersDetails'

const PrivateRoute = ({ children, role }) => {
  const { user, loading } = useContext(AuthContext)
  const { userInfo, userInfoLoading } = useUserInfo({ email: user?.email })
  // const { userDetails, userDetailsLoading } = useUsersDetails({
  //   user_type: user?.user_type,
  // })
  const location = useLocation()

  console.log(userInfo?.user_type, role, userInfoLoading)

  if (loading === true || userInfoLoading === true) {
    return <div>Loading...</div>
  }

  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ ...location.state, from: location }}
        replace
      ></Navigate>
    )
  }

  if (role) {
    if (userInfo?.user_type === role) {
      return children
    } else {
      return (
        <Navigate
          to="/"
          state={{ ...location.state, from: location }}
          replace
        />
      )
    }
  }
  return children
}

export default PrivateRoute
