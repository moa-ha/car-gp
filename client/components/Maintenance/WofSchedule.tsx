import React, { useState } from 'react'
import CarYear from './CarYear'

function WofSchedule() {
  const [date, setDate] = useState('')
  let result

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDate(e.target.value)
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    result = date + 365
  }

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <label htmlFor="datePicker"> Your latest Wof was </label>
        <br></br>
        Check if your car was registered before 1 January 2000.
        <CarYear />
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
          <span className="returned-date"> {result}</span>❕
        </p>
      </form>
    </div>
  )
}

export default WofSchedule
