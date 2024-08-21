import name from '../styles/images/logo-5.png'
import logo from '../styles/images/logo_color.png'
import maintenance from '../styles/images/maintenance.png'
import consumables from '../styles/images/consumables.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSmile } from '@fortawesome/free-solid-svg-icons'

import {
  IfAuthenticated,
  IfNotAuthenticated,
} from '../components/Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { useRef, useEffect } from 'react'
import { useNewUser } from '../hooks/useUsers'

function Home() {
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
    console.log('sign out')
    return logout()
  }

  const handleSignIn = () => {
    console.log('sign in')
    return loginWithRedirect()
  }

  return (
    <div className="h-full p-5">
      <div>
        <FontAwesomeIcon icon={faUser} />
        <IfAuthenticated>
          <button className="btn-clear" onClick={handleSignOut}>
            Sign out
          </button>
          {user && (
            <p className="text-sm">
              Signed in as:{' '}
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

      <div className="mb-20 flex flex-col items-center">
        <img src={logo} alt="home-logo" className="w-64" />
        <img src={name} alt="home-logo-text" className="w-80" />
      </div>

      <div className="grid justify-items-center">
        <Link to="/guest">
          <div
            key="Consumables"
            className="bg-opacity mb-4 w-96 p-4 text-center"
          >
            <span className="relative w-64 text-2xl">
              <FontAwesomeIcon icon={faSmile} /> Try as a Guest without Login
            </span>
          </div>
        </Link>

        <ul className="mb-4 flex gap-4">
          <Link to="/maintenance">
            <li key="Maintenance" className="bg-opacity p-4">
              <span className="relative text-2xl">Maintenance </span>
              <span className="text-sm italic">Login is required</span>
              <img
                src={maintenance}
                alt="maintenance"
                className="relative h-64"
              />
            </li>
          </Link>

          <Link to="/consumables">
            <li key="Consumables" className="bg-opacity p-4">
              <span className="relative text-2xl">Consumables </span>
              <span className="text-sm italic">Login is required</span>
              <img
                src={consumables}
                alt="consumables"
                className="relative h-64"
              />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Home
