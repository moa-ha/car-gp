/* eslint-disable react/no-unescaped-entities */
// stretch: notice or alarm
// make it available to get user's average mileage per year and calculate accordingly

import { useEffect, useState } from 'react'
import { useGetConsumableById } from '../../hooks/useConsumables'
import React from 'react'
import NextSchedule from '../NextSchedule'

interface Props {
  id: number
}

function DateInput({ id }: Props) {
  const { data } = useGetConsumableById(id)
  const [date, setDate] = useState('')
  const [result, setResult] = useState('')

  useEffect(() => {
    if (data) {
      setDate(String(data.replaced))
    }
  }, [data])

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
  const km = Number(data?.km)
  const period = Math.floor(Number((km / average) * days))
  const dateObject = new Date(date)

  // calculate each accordingly and make it dd/mm/yyyy
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
          name="replaced"
          value={date}
        />
        <NextSchedule id={id} replaced={date} result={result} />
        check it on
        <span className="returned-date">
          {data && data.due !== '' ? data.due : result}
        </span>
      </form>
    </div>
  )
}

export default DateInput
