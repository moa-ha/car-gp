import { Link } from 'react-router-dom'
import { useConsumables } from '../../hooks/useConsumables'
import Delete from '../../components/Consumables/Delete'
import DateInput from '../../components/Consumables/DateInput'
import SignIn from '../../components/SignIn'
import UpdateMileage from '../../components/Consumables/UpdateMileage'

function Consumables() {
  const { data } = useConsumables()

  if (data) {
    return (
      <div className="p-4">
        <div className="p-4">
          <Link to="/consumables/add">
            <button className="btn-clear">Add your item</button>
          </Link>

          <UpdateMileage />
        </div>
        <div>
          <ul className="flex w-full flex-wrap gap-4">
            {data &&
              data.map((consumable) => (
                <li key={consumable.id} className="bg-opacity w-80 p-4">
                  <Link to={`/consumables/${consumable.id}`}>
                    <button className="btn-clear relative">Edit</button>
                  </Link>
                  <Delete id={consumable.id} />
                  <br></br>
                  <span className="relative text-2xl">{consumable.name}</span>
                  <span className="text-sm italic">
                    {' '}
                    Threshold; {consumable.km}km{' '}
                  </span>
                  <DateInput id={consumable.id} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    )
  } else {
    return <SignIn />
  }
}

export default Consumables
