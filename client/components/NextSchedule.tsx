interface SaveSchedule {
  id: number
  result: string
}
function NextSchedule({ id, result }: SaveSchedule) {
  return (
    <button className="btn-clear mt-2">Check the upcoming schedule!</button>
  )
}

export default NextSchedule
