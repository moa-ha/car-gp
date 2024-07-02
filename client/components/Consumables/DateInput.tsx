/* eslint-disable react/no-unescaped-entities */
// stretch: notice or alarm
// make it available to get user's average mileage per year and calculate accordingly

import { useEffect, useState } from 'react'
import { useGetConsumableById } from '../../hooks/useConsumables'
import React from 'react'
import NextSchedule from './NextSchedule'
import { period, calculate } from '../function'
import { useMaintenance } from '../../hooks/useMaintenance'
interface Props {
  id: number
}

function DateInput({ id }: Props) {
  const { data } = useGetConsumableById(id)
  const { data: maintenance } = useMaintenance()
  console.log(maintenance)

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

  // get how many days available for the item
  const averageKm = maintenance?.averageKm
  const km = Number(data?.km)
  const calculatedPeriod = period(km, averageKm)

  // date to string for Model
  const formattedDate = calculate(replaced, calculatedPeriod)

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
