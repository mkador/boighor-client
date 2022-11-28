import { useEffect, useState } from 'react'

const useUserInfo = ({ email }) => {
  const [userInfo, setUserInfo] = useState({})
  const [userInfoLoading, setUserInfoLoading] = useState(true)

  useEffect(() => {
    setUserInfoLoading(true)
    fetch(`https://boighor-server-nine.vercel.app/user/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data)
        setUserInfoLoading(false)
      })
  }, [email])

  return { userInfo, userInfoLoading }
}

export default useUserInfo
