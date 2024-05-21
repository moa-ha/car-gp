import { useDeleteItem } from '../../hooks/useItems'

function DeleteItem({ id }: { id: number }) {
  const mutation = useDeleteItem()
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

export default DeleteItem
