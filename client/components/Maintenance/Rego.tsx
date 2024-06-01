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
            target="blank"
          >
            Renewal of vehicle licence (rego)
          </Link>
          : Renew your registration.
        </p>
        <p className="text-base">
          <Link
            to="https://transact.nzta.govt.nz/transactions/CheckExpiry/entry"
            className="underline"
            target="blank"
          >
            Check expiry query
          </Link>
          : Check when your registration due
        </p>
        <RegoSchedule />
      </div>
    </>
  )
}

export default Rego
