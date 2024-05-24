import { Outlet } from 'react-router-dom'
import Nav from './Nav'

export default function Layout() {
  return (
    <div>
      <main>
        <Nav />
        <Outlet />
      </main>
      <footer></footer>
    </div>
  )
}
