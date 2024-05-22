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
      <>
        <EditInput data={data} />
      </>
    )
  }
}

export default Edit
