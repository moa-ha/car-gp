import { useState } from 'react'
import { useMaintenance } from '../../hooks/useMaintenance'
// TODO: separate wof vs rego

function RegoSchedule() {
  const { data } = useMaintenance()

  const [formState, setFormState] = useState({
    wof: data?.wof,
    wofDue: data?.wofDue,
    rego: data?.rego,
    regoDue: data?.regoDue,
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.currentTarget
    setFormState((prev) => ({ ...prev, rego: value }))
    console.log(formState)
  }

  let due

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log('rego ' + formState.rego)
    console.log('month ' + e.currentTarget.key)
    due = e.currentTarget.key * 31 + formState.rego
    console.log('returned ' + due)
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
              onClick={() => handleClick(month)}
            >
              {month}
            </button>
          ))}
          <button type="submit" className="btn-clear">
            Check the due
          </button>
        </form>
        <p className="text-base ">Renew before {due}</p>
        {/* TODO: make push alarm */}
        {/* <p className="text-base">Send notice ~~ before</p> */}
      </div>
    </>
  )
}

export default RegoSchedule
