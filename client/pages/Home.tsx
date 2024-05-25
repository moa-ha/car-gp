import name from '../styles/images/logo-5.png'
import logo from '../styles/images/logo-4.png'
import maintenance from '../styles/images/Maintenance.png'
import consumables from '../styles/images/consumables.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="bg-bg-img h-full p-10">
      <div className="mb-20 flex flex-col items-center">
        <img src={logo} alt="home-logo" className="h-64 w-64" />
        <img src={name} alt="home-logo" className="w-80" />
      </div>
      <div>
        <ul className="flex justify-center gap-4">
          <Link to="/maintenance">
            <li key="Maintenance" className="bg-opacity p-4">
              <span className="relative text-2xl">Maintenance</span>
              <img
                src={maintenance}
                alt="maintenance"
                className="relative h-64"
              />
            </li>
          </Link>
          <Link to="/consumables">
            <li key="Consumables" className="bg-opacity p-4">
              <span className="relative text-2xl">Consumables</span>
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
