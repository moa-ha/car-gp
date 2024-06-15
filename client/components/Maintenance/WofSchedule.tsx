import React, { useState } from 'react'
import CarYear from './CarYear'
import { calculate } from '../function'
import { Maintenance } from '../../../models/maintenance'

function WofSchedule({ data }: { data: Maintenance }) {
  const [date, setDate] = useState(data.wof)
  const [old, setOld] = useState(false)

  function handleClick() {
    setOld(!old)
  }
  let due

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
    console.log(due)
  }

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <label htmlFor="datePicker"> Your latest Wof was </label>
        <br></br>
        Check if your car was registered before 1 January 2000.
        <input type="checkbox" onClick={handleClick}></input>
        {old && <CarYear />}
        <input
          className="text-black"
          onChange={handleChange}
          type="date"
          name="date"
          id="datePicker"
          value={date}
        />
        <button className="btn-clear">save</button>
        <p>
          Due:
          <span className="returned-date"> {due}</span>❕
        </p>
      </form>
    </div>
  )
}

export default WofSchedule
