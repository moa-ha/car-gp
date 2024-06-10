import { useGuestConsumables } from '../../hooks/useGuest'
import DateInput from '../../components/Consumables/DateInput'

function Guest() {
  const { data } = useGuestConsumables()
  if (data) {
    console.log(data)
  }

  return (
    <div className="p-4">
      <div>
        <ul className="flex w-full flex-wrap gap-4">
          {data &&
            data.map((consumable) => (
              <li key={consumable.id} className="bg-opacity w-80 p-4">
                <span className="relative text-2xl">{consumable.name}</span>
                <DateInput id={consumable.id} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Guest
