import { Link } from 'react-router-dom'
import { useConsumables } from '../../hooks/useConsumables'
import Delete from '../../components/Consumables/Delete'
import DateInput from '../../components/Consumables/DateInput'
import Card from '../../components/Card'

function Consumables() {
  const { data } = useConsumables()
  console.log(data)

  return (
    <div className="p-4">
      <div>
        <Link to="/consumables/add">
          <button className="btn-logo-blue">Add your item</button>
        </Link>
      </div>
      <div>
        <ul className="flex w-full flex-wrap gap-4">
          {data &&
            data.map((consumable) => (
              <li key={consumable.id}>
                <Card>
                  <Link to={`/consumables/${consumable.id}`}>
                    <button className="btn-logo-blue">Edit</button>
                  </Link>
                  <Delete id={consumable.id} />
                  <br></br>
                  <span className="text-2xl">{consumable.name}</span>
                  <DateInput id={consumable.id} />
                </Card>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Consumables
