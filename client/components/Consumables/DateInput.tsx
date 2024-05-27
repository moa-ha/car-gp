/* eslint-disable react/no-unescaped-entities */
// stretch: notice or alarm
// make it available to get user's average mileage per year and calculate accordingly

import { useState } from 'react'
import { useConsumables } from '../../hooks/useConsumables'
import React from 'react'

interface Props {
  id: number
}

function DateInput({ id }: Props) {
  const { data } = useConsumables()
  const [date, setDate] = useState('')
  const [result, setResult] = useState('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDate(event.target.value)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log('result: ' + formattedDate)

    setResult(formattedDate)
  }

  // NZ average mileage per year is 15000.
  const days = 365
  const average = 15000
  let km = 0
  const dateObject = new Date(date)

  function getPeriod(id: number) {
    if (data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
          km = Number(data[i].km)
          return Math.floor(Number((km / average) * days))
        }
      }
    }
  }

  // calculate each accordingly and make it dd/mm/yyyy
  const period = Number(getPeriod(id))
  const milSecPeriod = period * 24 * 60 * 60 * 1000
  const receivedDate = Number(dateObject.getTime())
  const returnedDate = new Date(receivedDate + milSecPeriod)
  const formattedDate = returnedDate.toLocaleDateString('en-GB')

  return (
    <div className="relative flex gap-4">
      <form onSubmit={handleSubmit}>
        <label htmlFor="datePicker"> Select a date it's replaced: </label>
        <input
          className="text-black"
          onChange={handleChange}
          type="date"
          name="date"
          id="datePicker"
          value={date}
        />
        <button className="btn-clear mt-2">Check the upcoming schedule!</button>
        check it on
        <span className="returned-date"> {result}</span>
      </form>
    </div>
  )
}

export default DateInput
