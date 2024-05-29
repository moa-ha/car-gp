import { Link } from 'react-router-dom'
import RegoSchedule from './RegoSchedule'
import { useState } from 'react'
import { useMaintenance } from '../../hooks/useMaintenance'

function Rego() {
  const { data } = useMaintenance()
  const [formState, setFormState] = useState({
    wof: data?.wof,
    wofDue: data?.wofDue,
    rego: data?.rego,
    regoDue: data?.regoDue,
  })

  function handleChange(e: React.FormEvent<HTMLFormElement>) {
    setFormState(e.currentTarget.value)
  }
  return (
    <>
      <div className="relative text-2xl">
        Rego
        <p className="text-base">
          <Link
            to="https://transact.nzta.govt.nz/transactions/renewvehiclelicence/entry"
            className="underline"
          >
            Renewal of vehicle licence (rego)
          </Link>
          : Renew your registration.
        </p>
        <p className="text-base">
          <Link
            to="https://transact.nzta.govt.nz/transactions/CheckExpiry/entry"
            className="underline"
          >
            Check expiry query
          </Link>
          : Check when your registration due
        </p>
        <div className="p-4 text-base">
          When was it replaced?<br></br>
          <input
            className="m-2 rounded border border-gray-300 px-4 py-2"
            onChange={handleChange}
            type="date"
            value={formState.rego}
            name="replaced"
          />
        </div>
        {/* <RegoSchedule date={date} /> */}
      </div>
    </>
  )
}

export default Rego
