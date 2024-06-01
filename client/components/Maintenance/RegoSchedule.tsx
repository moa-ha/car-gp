import { useState } from 'react'
import { useMaintenance } from '../../hooks/useMaintenance'
import { Maintenance } from '../../../models/maintenance'
// TODO: separate wof vs rego

interface Due {
  due: string
}
function RegoSchedule() {
  const { data } = useMaintenance()

  const [formState, setFormState] = useState({
    wof: data?.wof,
    wofDue: data?.wofDue,
    rego: data?.rego,
    regoDue: data?.regoDue,
  } as Maintenance)

  let registered

  function addMonths(date, months) {
    date.setMonth(date.getMonth() + 10)
    console.log('returned date: ' + date)

    return date
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.currentTarget
    setFormState((prev) => ({ ...prev, rego: value }))
    console.log(formState.rego)
    registered = new Date(formState.rego)
    console.log(registered)
    addMonths(registered, 10)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log('handlesubmit is working')
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
            <button key={month} className="mr-1 w-8 border p-1">
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
