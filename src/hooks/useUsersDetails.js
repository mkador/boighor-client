import { useEffect, useState } from 'react'

const useUsersDetails = ({ user_type }) => {
  const [usersDetails, setUsersDetails] = useState([])
  const [userDetailsLoading, setUserDetailsLoading] = useState(true)

  useEffect(() => {
    setUserDetailsLoading(true)
    fetch(`https://boighor-server-nine.vercel.app/users/${user_type}`)
      .then((res) => res.json())
      .then((data) => {
        setUsersDetails(data)
        setUserDetailsLoading(false)
      })
  }, [user_type])

  return { usersDetails, userDetailsLoading }
}

export default useUsersDetails
