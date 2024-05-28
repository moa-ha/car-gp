import { FormEvent } from 'react'

function RegoSchedule({ date }: { date: string }) {
  // let due
  // due = date + e.target
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const number = e.submitter.value

    console.log(number)
  }
  return (
    <>
      <form id="months" onSubmit={handleSubmit}>
        <p>How many months have you registered?</p>

        <button type="submit" className="border p-1" name="number" value="1">
          1
        </button>
        <button type="submit" className="border p-1" name="number" value="2">
          2
        </button>
        <button type="submit" className="border p-1" name="number" value="3">
          3
        </button>
        <button type="submit" className="border p-1" name="number" value="4">
          4
        </button>
        <button type="submit" className="border p-1" name="number" value="5">
          5
        </button>
        <button type="submit" className="border p-1" name="number" value="6">
          6
        </button>
        <button type="submit" className="border p-1" name="number" value="7">
          7
        </button>
        <button type="submit" className="border p-1" name="number" value="8">
          8
        </button>
        <button type="submit" className="border p-1" name="number" value="9">
          9
        </button>
        <button type="submit" className="border p-1" name="number" value="10">
          10
        </button>
        <button type="submit" className="border p-1" name="number" value="11">
          11
        </button>
        <button type="submit" className="border p-1" name="number" value="12">
          12
        </button>
      </form>
      {/* <p className="text-base">Renew before {date}</p> */}
      {/* TODO: make push alrarm */}
      {/* <p className="text-base">Send notice ~~ before</p> */}
    </>
  )
}

export default RegoSchedule
