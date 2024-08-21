import { useState } from 'react'
import { Maintenance } from '../../../models/maintenance'
import { stringDate } from '../function'
import { useUpdateRego } from '../../hooks/useMaintenance'

function RegoSchedule({ data }: { data: Maintenance }) {
  const [rego, setRego] = useState({
    rego: data.rego,
    regoDue: data.regoDue,
  })
  const [duration, setDuration] = useState(0)

  const mutation = useUpdateRego()

  // get the registered date - update the data and convert date into obj
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.currentTarget
    setRego((prev) => ({ ...prev, rego: value }))
  }

  // get how many months registered
  const handleMonthClick = (event: React.MouseEvent, month: number) => {
    event.preventDefault()
    setDuration(month)
  }

  // return added date
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function addMonths(date: { setMonth?: any; getMonth?: any }, months: number) {
    date.setMonth(date.getMonth() + months)
    const returned = stringDate(date)
    setRego((prev) => ({ ...prev, regoDue: returned }))
  }

  // return the added date using registered date + duration
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    addMonths(new Date(String(rego.rego)), duration)
  }

  function handleSave() {
    mutation.mutate(rego)
    alert('Successfully saved')
  }
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  return (
    <>
      <div className="p-4 text-base">
        When was it renewed?
        <form onSubmit={handleSubmit}>
          <input
            className="m-2 rounded border border-gray-300 px-4 py-2 text-black"
            onChange={handleChange}
            type="date"
            value={String(rego.rego)}
            name="rego"
          />

          <p className="text-lg">How many months did you register for?</p>
          {months.map((month) => (
            <button
              key={month}
              className={`${duration === month ? 'mr-1 w-8 border bg-sky-700 bg-white p-1 hover:bg-sky-700' : 'mr-1 w-8 border bg-white p-1 hover:bg-sky-700'}`}
              onClick={(event: React.MouseEvent) =>
                handleMonthClick(event, month)
              }
            >
              {month}
            </button>
          ))}
          <button type="submit" className="btn-clear">
            Check the due
          </button>
        </form>
        {rego.regoDue && (
          <p className="text-base ">Renew before {rego.regoDue}</p>
        )}
        <button className="btn-clear" onClick={handleSave}>
          Save
        </button>
        {/* TODO: make push alarm */}
        {/* <p className="text-base">Send notice ~~ before</p> */}
      </div>
    </>
  )
}

export default RegoSchedule
