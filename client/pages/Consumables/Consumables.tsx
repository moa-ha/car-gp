import { Link } from 'react-router-dom'
import { useConsumables } from '../../hooks/useConsumables'
import Delete from '../../components/Consumables/Delete'
import DateInput from '../../components/Consumables/DateInput'

function Consumables() {
  const { data } = useConsumables()
  console.log(data)

  return (
    <>
      <div className="app">
        <h2>
          Consumable Items
          <Link to="/consumables/add">
            <button className="button right">Add your item</button>
          </Link>
        </h2>
        <div className="container">
          <ul>
            {data &&
              data.map((consumable) => (
                <li key={consumable.id}>
                  <Link to={`/consumables/${consumable.id}`}>
                    <button className="button right">Edit</button>
                  </Link>
                  <Delete id={consumable.id} />
                  <br></br>
                  {consumable.name}
                  <DateInput id={consumable.id} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Consumables
