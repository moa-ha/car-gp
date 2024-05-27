import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import logo from '../styles/images/logo-4.png'

import { Link } from 'react-router-dom'

function Nav() {
  // TODO: call the useAuth0 hook and destructure user, logout, and loginWithRedirect
  const { user, logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    console.log('sign out')
    return logout()
  }

  const handleSignIn = () => {
    console.log('sign in')
    return loginWithRedirect()
  }
  return (
    <>
      <nav className="p-4">
        <div className="flex justify-between">
          <div className="flex items-end space-x-4 text-2xl">
            <Link to="/">
              <img src={logo} alt="Logo" className="w-40" />
            </Link>
            <Link
              to="/maintenance"
              className="smooth-transition text-shadow-md hover:text-shadow-lg"
            >
              Maintenance
            </Link>
            <Link
              to="/consumables"
              className="smooth-transition text-shadow-md hover:text-shadow-lg"
            >
              Consumables
            </Link>
          </div>

          <div>
            <IfAuthenticated>
              <button className="btn-clear" onClick={handleSignOut}>
                Sign out
              </button>
              {user && (
                <p className="text-sm">
                  Signed in as:
                  <span className="font-semibold">{user.nickname}</span>
                </p>
              )}
            </IfAuthenticated>
            <IfNotAuthenticated>
              <button className="btn-clear" onClick={handleSignIn}>
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
