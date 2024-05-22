import { useDeleteConsumable } from '../../hooks/useConsumables'

function Delete({ id }: { id: number }) {
  const mutation = useDeleteConsumable()
  const handleDelete = (e: any) => {
    mutation.mutate(e.target.id)
  }

  return (
    <button
      id={String(id)}
      onClick={handleDelete}
      className="button right"
      aria-label="delete button"
    >
      Delete
    </button>
  )
}

export default Delete