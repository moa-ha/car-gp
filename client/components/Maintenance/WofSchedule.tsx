import React, { useState } from 'react'
import CarYear from './CarYear'
import { calculate } from '../function'
import { Maintenance } from '../../../models/maintenance'
import { useUpdateWof } from '../../hooks/useMaintenance'

function WofSchedule({ data }: { data: Maintenance }) {
  const [date, setDate] = useState(data.wof)
  const [old, setOld] = useState(false)
  const [wof, setWof] = useState({
    user: data.user,
    wof: data.wof,
    wofDue: data.wofDue,
  })

  const mutation = useUpdateWof()
  function handleClick() {
    setOld(!old)
  }
  let due: string

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDate(e.target.value)
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (old) {
      due = calculate(date, 182)
    } else {
      due = calculate(date, 365)
    }
    setWof({ user: data.user, wof: date, wofDue: due })
  }

  function handleSave() {
    mutation.mutate(wof)
    alert('Successfully saved')
  }

  return (
    <div className="relative mt-4">
      <form onSubmit={handleSubmit}>
        <span className="underline">
          Check if your car was registered before 1 January 2000.
        </span>
        <input type="checkbox" onClick={handleClick}></input>
        {old && <CarYear />}
        <br></br>
        <label htmlFor="datePicker">Put your latest WoF ▶︎</label>
        <input
          className="m-2 rounded border border-gray-300 px-4 py-2 text-black"
          onChange={handleChange}
          type="date"
          name="date"
          id="datePicker"
          value={date}
        />
        <button className="btn-clear">Check the next schedule</button>
        <p>
          Due:
          <span className="returned-date"> {wof.wofDue}</span>❕
        </p>
      </form>
      <button className="btn-clear" onClick={handleSave}>
        Save
      </button>
    </div>
  )
}

export default WofSchedule
