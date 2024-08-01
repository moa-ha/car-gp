import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import logo from '../styles/images/logo_color.png'

import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { useNewUser } from '../hooks/useUsers.ts'

function Nav() {
  const { user, logout, loginWithRedirect, isAuthenticated } = useAuth0()
  const mutation = useNewUser()
  const hasRunEffect = useRef(false)

  useEffect(() => {
    if (!hasRunEffect.current && isAuthenticated && user && user.sub) {
      mutation.mutate({
        id: user.sub,
        nickname: user.nickname || '',
      })
      hasRunEffect.current = true
    }
  }, [isAuthenticated, user, mutation])

  const handleSignOut = () => {
    return logout()
  }

  const handleSignIn = () => {
    return loginWithRedirect()
  }
  return (
    <>
      <nav className="nav p-4">
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
              <p className="text-2xl">Please sign in to load your data.</p>
              <button className="btn-clear" onClick={handleSignIn}>
                Sign in
              </button>
              <Link to="/guest">
                <button className="btn-clear">Try as guest</button>
              </Link>
            </IfNotAuthenticated>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
