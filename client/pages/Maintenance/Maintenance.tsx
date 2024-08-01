import { Link } from 'react-router-dom'
import RegoSchedule from '../../components/Maintenance/RegoSchedule'
import WofSchedule from '../../components/Maintenance/WofSchedule'
import { useMaintenance } from '../../hooks/useMaintenance'

function Maintenance() {
  const { data } = useMaintenance()

  if (data) {
    return (
      <div className="flex flex-col gap-4 p-4">
        <div className="bg-opacity p-4">
          <div className="relative text-2xl">WoF</div>
          <span className="relative">
            A warrant of fitness (WoF) or certificate of fitness inspection is a
            regular check to make sure your vehicle is safe. Enter when your
            latest Wof was done and get notification for your next scheduled
            Wof!
          </span>
          <WofSchedule data={data} />
        </div>

        <div className="bg-opacity p-4">
          <div className="relative text-2xl">
            Rego
            <RegoSchedule data={data} />
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
          </div>
        </div>
      </div>
    )
  }
}

export default Maintenance
