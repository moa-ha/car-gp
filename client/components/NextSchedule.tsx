import { useEdit, useGetConsumableById } from '../hooks/useConsumables'

interface SaveSchedule {
  id: number
  replaced: string
  result: string
}
function NextSchedule({ id, replaced, result }: SaveSchedule) {
  const { data } = useGetConsumableById(id)
  const mutation = useEdit()

  const handleClick = (): void => {
    mutation.mutate({
      id: id,
      name: String(data?.name),
      replaced: replaced,
      due: result,
      km: Number(data?.km),
      user: String(data?.user),
    })
  }
  return (
    <button className="btn-clear mt-2" onClick={handleClick}>
      Check the upcoming schedule!
    </button>
  )
}

export default NextSchedule
