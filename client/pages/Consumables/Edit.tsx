import { useParams } from 'react-router-dom'
import EditInput from '../../components/Consumables/EditInput'
import { useGetConsumableById } from '../../hooks/useConsumables'

function Edit() {
  const id = Number(useParams().id)

  const { data, isLoading, isError, error } = useGetConsumableById(id)

  if (isLoading) {
    return <>is loading</>
  }
  if (isError) {
    return <>error: {error}</>
  }
  if (data && data.id == id) {
    return (
      <div className="bg-opacity p-4">
        {data.name}
        <EditInput data={data} />
      </div>
    )
  }
}

export default Edit
