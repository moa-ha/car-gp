import { useDeleteConsumable } from '../../hooks/useConsumables'

function Delete({ id }: { id: number }) {
  const mutation = useDeleteConsumable()
  const handleDelete = (e: any) => {
    mutation.mutate(e.target.id)
    window.location.reload()
  }

  return (
    <button
      id={String(id)}
      onClick={handleDelete}
      className="btn-clear relative justify-end"
      aria-label="delete button"
    >
      Delete
    </button>
  )
}

export default Delete
