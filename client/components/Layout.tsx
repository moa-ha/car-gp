import { Outlet } from 'react-router-dom'
import Nav from './Nav'

export default function Layout() {
  return (
    <div className="bg-bg-img h-full">
      <main>
        <Nav />
        <Outlet />
      </main>
      <footer></footer>
    </div>
  )
}
