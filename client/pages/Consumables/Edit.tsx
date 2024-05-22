import { useParams } from 'react-router-dom'
import EditInput from '../../components/Consumables/EditInput'

function Edit() {
  const id = Number(useParams().id)
  return (
    <>
      <EditInput id={id} />
    </>
  )
}

export default Edit
