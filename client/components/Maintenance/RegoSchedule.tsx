import { FormEvent } from 'react'

function RegoSchedule({ date }: { date: string }) {
  // let due
  // due = date + e.target

  const handleClick = (month: number) => {
    console.log(month)
    // 여기에서 month를 이용하여 다른 작업을 수행할 수 있습니다.
  }

  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  return (
    <>
      <p className="text-lg">How many months have you registered?</p>
      {months.map((month) => (
        <button
          key={month}
          className="mr-1 w-8 border p-1"
          onClick={() => handleClick(month)}
        >
          {month}
        </button>
      ))}

      {/* <p className="text-base">Renew before {date}</p> */}
      {/* TODO: make push alrarm */}
      {/* <p className="text-base">Send notice ~~ before</p> */}
    </>
  )
}

export default RegoSchedule
