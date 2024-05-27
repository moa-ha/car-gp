/* eslint-disable react/no-unescaped-entities */
// users can add items their own

import { FormEvent, useState } from 'react'
import { useAddConsumable } from '../../hooks/useConsumables'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import SearchBar from '../../components/Consumables/SearchBar'

function Add() {
  const navigate = useNavigate()
  const [formState, setFormState] = useState({
    name: '',
    replaced: '',
    due: '',
    km: 0,
  })
  const mutation = useAddConsumable()

  // TODO: make the due calculation
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget
    const info = { ...formState, [name]: value }
    setFormState(info)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    mutation.mutate(formState)
    navigate('/consumables')
    // window.location.reload()
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
            onChange={handleChange}
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
