import { useState } from 'react'
import { useMaintenance } from '../../hooks/useMaintenance'
import { Maintenance } from '../../../models/maintenance'
// TODO: separate wof vs rego

function RegoSchedule() {
  const { data } = useMaintenance()

  const [formState, setFormState] = useState({
    wof: data?.wof,
    wofDue: data?.wofDue,
    rego: data?.rego,
    regoDue: data?.regoDue,
  } as Maintenance)
  const [registered, setRegistered] = useState({})
  const [duration, setDuration] = useState(0)

  // get the registered date - update the data and convert date into obj
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget
    setFormState((prev) => ({ ...prev, [name]: value }))
    setRegistered(new Date(value))
  }

  // get how many months registered
  const handleMonthClick = (event, month) => {
    event.preventDefault()
    setDuration(month)
  }

  // return added date
  function addMonths(date, months) {
    date.setMonth(date.getMonth() + months)
    console.log('returned date: ' + date)

    return date
  }

  // return the added date using registered date + duration
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(formState.rego)
    console.log('registered: ' + registered)
    console.log('duration: ' + duration)

    addMonths(registered, duration)
  }

  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  return (
    <>
      <div className="p-4 text-base">
        When was it replaced?
        <form onSubmit={handleSubmit}>
          <input
            className="m-2 rounded border border-gray-300 px-4 py-2"
            onChange={handleChange}
            type="date"
            value={formState.rego}
            name="rego"
          />

          <p className="text-lg">How many months have you registered?</p>
          {months.map((month) => (
            <button
              key={month}
              className="mr-1 w-8 border p-1"
              onClick={(event) => handleMonthClick(event, month)}
            >
              {month}
            </button>
          ))}
          <button type="submit" className="btn-clear">
            Check the due
          </button>
        </form>
        {/* <p className="text-base ">Renew before {due}</p> */}
        {/* TODO: make push alarm */}
        {/* <p className="text-base">Send notice ~~ before</p> */}
      </div>
    </>
  )
}

export default RegoSchedule
