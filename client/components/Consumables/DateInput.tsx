/* eslint-disable react/no-unescaped-entities */
// stretch: notice or alarm
// make it available to get user's average mileage per year and calculate accordingly

import { useEffect, useState } from 'react'
import { useGetConsumableById } from '../../hooks/useConsumables'
import React from 'react'
import NextSchedule from './NextSchedule'
import { calculate } from '../function'

interface Props {
  id: number
}

function DateInput({ id }: Props) {
  const { data } = useGetConsumableById(id)
  const [replaced, setReplaced] = useState('')
  const [due, setDue] = useState('')

  useEffect(() => {
    if (data) {
      setReplaced(String(data.replaced))
      setDue(data.due || '')
    }
  }, [data])

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setReplaced(event.target.value)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setDue(formattedDate)
  }

  // NZ average mileage per year is 15000.
  const days = 365
  const average = 15000
  const km = Number(data?.km)
  const period = Math.floor(Number((km / average) * days))
  const dateObject = new Date(replaced)

  const formattedDate = calculate(dateObject, period)

  return (
    <div className="relative flex gap-4">
      <form onSubmit={handleSubmit}>
        <label htmlFor="datePicker"> Select a date it's replaced: </label>
        <input
          className="text-black"
          onChange={handleChange}
          type="date"
          name="replaced"
          value={replaced}
        />
        <button className="btn-clear mt-2">Check the upcoming schedule!</button>
        <NextSchedule id={id} replaced={replaced} due={due} />
      </form>
    </div>
  )
}

export default DateInput
