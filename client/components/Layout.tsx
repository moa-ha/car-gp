import { Outlet } from 'react-router-dom'
import Nav from './Nav'

export default function Layout() {
  return (
    <div className="h-full">
      <Nav />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  )
}
