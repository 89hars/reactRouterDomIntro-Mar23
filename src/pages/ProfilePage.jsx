import { Navigate } from 'react-router-dom'

const isAuthenticated = false

const ProfilePage = () => {
  if (isAuthenticated) {
    return (
      <>
        <h1>Profile page</h1>
      </>
    )
  } else {
    return <Navigate to='/' />
  }
}

export default ProfilePage
