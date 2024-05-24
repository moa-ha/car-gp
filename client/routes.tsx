import { createRoutesFromElements, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Layout from './components/Layout.tsx'
import Consumables from './pages/Consumables/Consumables.tsx'
import Edit from './pages/Consumables/Edit.tsx'
import Add from './pages/Consumables/Add.tsx'
export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/consumables" element={<Consumables />} />
    <Route path="/consumables/:id" element={<Edit />} />
    <Route path="/consumables/add" element={<Add />} />
  </Route>,
)
