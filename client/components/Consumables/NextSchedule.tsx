import { useEdit, useGetConsumableById } from '../../hooks/useConsumables'

interface SaveSchedule {
  id: number
  replaced: string
  due: string
}
function NextSchedule({ id, replaced, due }: SaveSchedule) {
  const { data } = useGetConsumableById(id)
  const mutation = useEdit()

  const handleClick = (): void => {
    mutation.mutate({
      id: id,
      name: String(data?.name),
      replaced: replaced,
      due: due,
      km: Number(data?.km),
      user: String(data?.user),
    })
    alert('Successfully saved')
  }
  return (
    <div>
      check it on...
      <span className="returned-date">{due}</span>
      <button className="btn-clear mt-2" onClick={handleClick}>
        Save
      </button>
    </div>
  )
}

export default NextSchedule
