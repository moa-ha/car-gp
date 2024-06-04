import { MouseEvent, SetStateAction, useState } from 'react'
import { useMaintenance } from '../../hooks/useMaintenance'
import { Maintenance } from '../../../models/maintenance'
import SaveRego from './SaveRego'
import { stringDate } from '../function'
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
  const [due, setDue] = useState('')

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
    const returned = stringDate(date)
    setDue(returned)
  }

  // return the added date using registered date + duration
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
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
              className={`${duration === month ? 'mr-1 w-8 border bg-sky-700 p-1 hover:bg-sky-700' : 'mr-1 w-8 border p-1 hover:bg-sky-700'}`}
              onClick={(event) => handleMonthClick(event, month)}
            >
              {month}
            </button>
          ))}
          <button type="submit" className="btn-clear">
            Check the due
          </button>
        </form>
        {due && (
          <>
            <p className="text-base ">Renew before {due}</p>
            <SaveRego due={due} />
          </>
        )}
        {/* TODO: make push alarm */}
        {/* <p className="text-base">Send notice ~~ before</p> */}
      </div>
    </>
  )
}

export default RegoSchedule
