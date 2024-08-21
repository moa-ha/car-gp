/* eslint-disable react/no-unescaped-entities */
import {
  useGetConsumableByIdForGuest,
  useGuestConsumables,
} from '../../hooks/useGuest'
import Loading from '../../components/Loading'
import { useState } from 'react'

import { calculate, period } from '../../components/function'
import NextSchedule from '../../components/Consumables/NextSchedule'

interface Props {
  id: number
}

function Date({ id }: Props) {
  const { data } = useGetConsumableByIdForGuest(id)

  const [replaced, setReplaced] = useState('')
  const [due, setDue] = useState('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setReplaced(event.target.value)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setDue(formattedDate)
  }

  const calculatedPeriod = period(data?.km, 15000)

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

function Guest() {
  const { isLoading, data } = useGuestConsumables()
  if (isLoading) {
    return <Loading />
  }
  return (
    <div className="p-4">
      <div className="p-4 text-lg">
        Calculated based on the average annual mileage of 15,000 km in New
        Zealand and average threshold of each item. You can customize once you
        sign in.
      </div>
      <div>
        <ul className="flex w-full flex-wrap gap-4">
          {data &&
            data.map((consumable) => (
              <li key={consumable.id} className="bg-opacity w-80 p-4">
                <span className="relative text-2xl">{consumable.name}</span>
                <span className="text-sm italic">
                  {' '}
                  Threshold; {consumable.km}km{' '}
                </span>
                <Date id={consumable.id} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Guest
