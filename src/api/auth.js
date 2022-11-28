export const setAuthToken = (user) => {
  const currentUser = {
    email: user.email,
    user_type: user.user_type,
    name: user.name,
  }
  console.log(user)

  fetch(`https://boighor-server-nine.vercel.app/user/${user?.email}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      localStorage.setItem('boighor-token', data.token)
    })
}
