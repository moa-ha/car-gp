import { Link } from 'react-router-dom'
import RegoSchedule from './RegoSchedule'

function Rego() {
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
        <div className="p-4">
          When was it replaced?<br></br>
          <input
            className="m-2 rounded border border-gray-300 px-4 py-2"
            onChange={handleChange}
            type="date"
            value={formState.replaced}
            name="replaced"
          />
        </div>
        {/* <RegoSchedule date={date} /> */}
      </div>
    </>
  )
}

export default Rego
