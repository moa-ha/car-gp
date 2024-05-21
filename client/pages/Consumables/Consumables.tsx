import { Link } from 'react-router-dom'
import { useConsumables } from '../../hooks/useConsumables'
import Delete from '../../components/Consumables/Delete'

function Consumables() {
  const { data } = useConsumables()
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
                  <Link to={`${consumable.id}`}>
                    <button className="button right">Edit</button>
                  </Link>
                  <Delete id={consumable.id} />
                  <br></br>
                  {consumable.name}
                  {/* <DateInputForm id={consumable.id} /> */}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Consumables
