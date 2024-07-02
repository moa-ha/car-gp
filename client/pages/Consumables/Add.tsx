/* eslint-disable react/no-unescaped-entities */
// users can add items their own

import { FormEvent, useState } from 'react'
import { useAddConsumable } from '../../hooks/useConsumables'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import SearchBar from '../../components/Consumables/SearchBar'
import { useAuth0 } from '@auth0/auth0-react'
import { useMaintenance } from '../../hooks/useMaintenance'
import { period, calculate } from '../../components/function'

function Add() {
  const mutation = useAddConsumable()
  const navigate = useNavigate()
  const { user } = useAuth0()
  const { data: maintenance } = useMaintenance()

  const [formState, setFormState] = useState({
    name: '',
    replaced: '',
    due: '',
    km: 0,
    user: user?.sub,
  })
  const [calculatedPeriod, setCalculatedPeriod] = useState(0)

  const averageKm = maintenance?.averageKm

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget
    const info = { ...formState, [name]: value }
    setFormState(info)
  }

  function handlePeriod(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(e.currentTarget.value)
    setFormState((prev) => ({ ...prev, km: value }))
    setCalculatedPeriod(period(value, averageKm))
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formattedDate = calculate(formState.replaced, calculatedPeriod)
    const updatedFormState = { ...formState, due: formattedDate }
    mutation.mutate(updatedFormState)

    navigate('/consumables')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <button className="btn-clear">Save</button>
        <div className="p-4">
          Which item do you want to get notice for?<br></br>
          <input
            className="m-2 rounded border border-gray-300 px-4 py-2"
            onChange={handleChange}
            type="text"
            value={formState.name}
            name="name"
          />
        </div>
        <div className="p-4">
          When was it replaced?<br></br>
          <input
            className="m-2 rounded border border-gray-300 px-4 py-2"
            onChange={handleChange}
            type="date"
            value={formState.replaced}
            name="replaced"
          />
        </div>
        <div className="p-4">
          How many miles can you drive with this?<br></br>
          <input
            className="m-2 rounded border border-gray-300 px-4 py-2"
            onChange={handlePeriod}
            type="number"
            value={formState.km}
            name="km"
          />
        </div>
      </form>
      <div className=" p-4">
        Search if you don't know
        <SearchBar />
      </div>
    </>
  )
}

export default Add
