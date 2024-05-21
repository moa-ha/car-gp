import { createRoutesFromElements, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Layout from './components/Layout.tsx'
import Consumables from './pages/Consumables/Consumables.tsx'
export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/consumables" element={<Consumables />} />
  </Route>,
)
