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

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget
    const info = { ...formState, [name]: value }
    setFormState(info)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(formState)
    mutation.mutate(formState)
    navigate('/items')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        Which item do you want to get notice for?
        <input
          onChange={handleChange}
          type="text"
          value={formState.name}
          id=""
          name="name"
        />
        <br></br>
        How many miles can you drive with this?
        <input
          onChange={handleChange}
          type="number"
          value={formState.km}
          id=""
          name="atMileage"
        />
        <br></br>
        <span>
          Search if you don't know
          <SearchBar />
        </span>
        <br></br>
        <button className="button">Add Item</button>
      </form>
      <br></br>
    </>
  )
}

export default Add
