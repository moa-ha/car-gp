import { useNavigate } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import { useEdit } from '../../hooks/useConsumables'
import { Consumable } from '../../../models/consumable'

function EditInput({ data }: { data: Consumable }) {
  const mutation = useEdit()
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
    window.location.reload()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="relative pt-4 text-xl underline">
          You can call it whatever you want.<br></br>
          <input
            className="text-base"
            onChange={handleChange}
            type="text"
            value={formState.name}
            name="name"
            placeholder={data.name}
          />
        </div>

        <div className="relative pt-4 text-xl underline">
          When was it replaced?<br></br>
          <input
            className="text-base"
            onChange={handleChange}
            type="date"
            value={formState.replaced}
            name="replaced"
            placeholder={data.replaced}
          />
        </div>
        <div className="relative pt-4 text-xl underline">
          You can normally drive {data.km}km but we know it depends cars! How
          far can you drive with this item?<br></br>
          <input
            className="text-base"
            onChange={handleChange}
            type="number"
            value={formState.km}
            name="km"
            placeholder={String(data.km) || '0'}
          />
          km
        </div>

        <button type="submit" className="btn-clear relative mt-4">
          save
        </button>
      </form>
    </div>
  )
}
export default EditInput
