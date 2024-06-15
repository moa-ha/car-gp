import React, { useState } from 'react'
import CarYear from './CarYear'

function WofSchedule() {
  const [date, setDate] = useState('')
  const [isShow, setIsShow] = useState(false)

  function handleClick() {
    setIsShow(!isShow)
  }
  let due

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDate(e.target.value)
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    due = date + 365
  }

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <label htmlFor="datePicker"> Your latest Wof was </label>
        <br></br>
        Check if your car was registered before 1 January 2000.
        <input type="checkbox" onClick={handleClick}></input>
        {isShow && <CarYear />}
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
