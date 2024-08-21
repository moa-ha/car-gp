import { useParams } from 'react-router-dom'
import EditInput from '../../components/Consumables/EditInput'
import { useGetConsumableById } from '../../hooks/useConsumables'
import Loading from '../../components/Loading'

function Edit() {
  const id = Number(useParams().id)

  const { data, isLoading, isError, error } = useGetConsumableById(id)

  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return <>error: {error}</>
  }
  if (data && data.id == id) {
    return (
      <div className="bg-opacity p-4">
        <span className="text-2xl font-bold">{data.name}</span>
        <EditInput data={data} />
      </div>
    )
  }
}

export default Edit
