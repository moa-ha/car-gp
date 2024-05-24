import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import logo from '../styles/car-gp-logo-circle.png'

import { Link } from 'react-router-dom'

function Nav() {
  // TODO: call the useAuth0 hook and destructure user, logout, and loginWithRedirect
  const auth = useAuth0()
  // TODO: replace placeholder user object with the one from auth0
  const user = {
    nickname: auth.user,
  }
  console.log(user)

  const handleSignOut = () => {
    console.log('sign out')
    return auth.logout()
  }

  const handleSignIn = () => {
    console.log('sign in')
    const { loginWithRedirect } = auth
    return loginWithRedirect()
  }
  return (
    <>
      <nav className="bg-logo-blue p-2 text-white shadow-lg">
        <div className="container flex justify-between">
          <div className="items-end space-x-4 text-lg">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-32 w-32" />
            </Link>
            <Link to="/" className="hover:text-gray-300">
              Inspection
            </Link>
            <Link to="/consumables" className="hover:text-gray-300">
              Consumables
            </Link>
          </div>

          <div>
            <IfAuthenticated>
              <button className="btn-logo-blue" onClick={handleSignOut}>
                Sign out
              </button>
              {user && (
                <p className="text-sm">
                  Signed in as:
                  {/* <span className="font-semibold">{user.nickname}</span> */}
                </p>
              )}
            </IfAuthenticated>
            <IfNotAuthenticated>
              <button className="btn-logo-blue" onClick={handleSignIn}>
                Sign in
              </button>
            </IfNotAuthenticated>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
