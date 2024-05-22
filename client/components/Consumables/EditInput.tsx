import { useNavigate } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import { useEditKm } from '../../hooks/useConsumables'
import { Consumable } from '../../../models/consumable'

function EditInput({ data }: { data: Consumable }) {
  const mutation = useEditKm()
  const navigate = useNavigate()

  const [formState, setFormState] = useState({
    id: data.id,
    name: data.name,
    replaced: data.replaced,
    due: data.due,
    km: data.km,
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    mutation.mutate(formState)
    navigate('/consumables')
  }
  console.log(data)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          You can call it whatever you want.
          <input
            onChange={handleChange}
            type="text"
            value={formState.name}
            name="name"
            placeholder={data.name}
          />
        </div>
        <div>
          When was it replaced?
          <input
            onChange={handleChange}
            type="date"
            value={formState.replaced}
            name="replaced"
            placeholder={data.replaced}
          />
        </div>
        <div>
          You can normally drive {data.km}km but we know it depends cars! How
          far can you drive with this item?
          <input
            onChange={handleChange}
            type="number"
            value={formState.km}
            name="km"
            placeholder={String(data.km) || '0'}
          />
          km
        </div>

        <button type="submit">save</button>
      </form>
    </>
  )
}
export default EditInput
