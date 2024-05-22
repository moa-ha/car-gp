import { useNavigate, useParams } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import { useEditKm, useGetConsumableById } from '../../hooks/useConsumables'

function Edit() {
  const id = Number(useParams().id)

  const mutation = useEditKm()
  const navigate = useNavigate()

  const { data, isLoading, isError, error } = useGetConsumableById(id)

  const [formState, setFormState] = useState({
    id: id,
    name: data.name,
    replaced: '',
    due: '',
    km: data.km,
  })

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>Error: {error?.message}</p>
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    mutation.mutate(formState)
    navigate('/consumables')
  }

  if (data) {
    return (
      <>
        <form onSubmit={handleSubmit}>
          You can call it whatever you want.
          <input
            onChange={handleChange}
            type="text"
            value={formState.name}
            name="name"
            placeholder={data.name}
          />
          When was it replaced?
          <input
            onChange={handleChange}
            type="text"
            value={formState.replaced}
            name="replaced"
            placeholder={data.replaced}
          />
          You can normally drive {data.km}km but we know it depends cars! How
          far can you drive with this item?
          <input
            onChange={handleChange}
            type="number"
            value={formState.km}
            name="km"
            placeholder={data.km || 0}
          />
          km
          <button type="submit">save</button>
        </form>
      </>
    )
  }
}
export default Edit
