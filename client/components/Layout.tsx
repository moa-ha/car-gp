import { Outlet } from 'react-router-dom'
import Nav from './Nav'

export default function Layout() {
  return (
    <div className="app">
      <header>
        <h1>GP for your Car</h1>
      </header>
      <main>
        <Nav />
        <Outlet />
      </main>
      <footer></footer>
    </div>
  )
}
