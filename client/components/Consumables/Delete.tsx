import { useDeleteConsumable } from '../../hooks/useConsumables'

function Delete({ id }: { id: number }) {
  const mutation = useDeleteConsumable()
  const handleDelete = () => {
    if (confirm('Do you want to delete this item?')) {
      mutation.mutate(id)
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="btn-clear relative justify-end"
      aria-label="delete button"
    >
      Delete
    </button>
  )
}

export default Delete
