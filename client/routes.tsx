import { createRoutesFromElements, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Layout from './components/Layout.tsx'
import Consumables from './pages/Consumables/Consumables.tsx'
import Edit from './pages/Consumables/Edit.tsx'
import Add from './pages/Consumables/Add.tsx'
import Maintenance from './pages/Maintenance/Maintenance.tsx'
import Guest from './pages/Consumables/Guest.tsx'
export default createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="/" element={<Layout />}>
      <Route path="/consumables" element={<Consumables />} />
      <Route path="/consumables/:id" element={<Edit />} />
      <Route path="/consumables/add" element={<Add />} />
      <Route path="/maintenance" element={<Maintenance />} />
      <Route path="/consumables/guest" element={<Guest />} />
    </Route>
  </Route>,
)
