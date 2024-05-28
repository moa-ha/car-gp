function RegoSchedule({ date }: { date: string }) {
  const handleClick = (month: number) => {
    date = month * 31 + date
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

      <p className="text-base">Renew before {date}</p>
      {/* TODO: make push alrarm */}
      {/* <p className="text-base">Send notice ~~ before</p> */}
    </>
  )
}

export default RegoSchedule
