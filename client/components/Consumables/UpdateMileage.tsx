import { useState } from 'react'
import { useMaintenance, useUpdateKm } from '../../hooks/useMaintenance'

export default function UpdateMileage() {
  const mutation = useUpdateKm()
  const { data } = useMaintenance()

  const [prompt, setPrompt] = useState(false)
  const [averageKm, setAverageKm] = useState(Number(data?.averageKm))

  function handleClick() {
    setPrompt(!prompt)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setAverageKm(Number(e.currentTarget.value))
  }

  function handleSubmit() {
    if (averageKm !== null) {
      mutation.mutate({ averageKm })
    }
  }
  return (
    <>
      <button className="btn-clear" onClick={handleClick}>
        What&apos;s your annual mileage?
      </button>
      {prompt && (
        <p>
          Currently, the items are all calculated based on your mileage, set at{' '}
          <strong>{data?.averageKm}km</strong> per year.
          <p className="text-sm italic">
            New Zealand average mileage; 15,000 km
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              className="border"
              placeholder="Update mileage"
              onChange={handleChange}
              value={averageKm}
            />
            <button type="submit" className="btn-clear">
              Update mileage
            </button>
          </form>
        </p>
      )}
    </>
  )
}
