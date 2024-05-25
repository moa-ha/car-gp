import name from '../styles/logo-5.png'
import logo from '../styles/logo-4.png'

function Home() {
  return (
    <div className="bg-bg-img h-full p-10">
      <div className="flex flex-col items-center">
        <img src={logo} alt="home-logo" className="h-64 w-64" />
        <img src={name} alt="home-logo" className="w-80" />
      </div>
    </div>
  )
}

export default Home
