import React, { useState } from 'react'

function WofSchedule() {
  const [date, setDate] = useState('')
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {}
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setDate(e.currentTarget)
  }

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <label htmlFor="datePicker"> Your latest Wof was </label>
        <br></br>
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
          check it on
          <span className="returned-date"> {result}</span>❕
        </p>
      </form>
    </div>
  )
}

export default WofSchedule
