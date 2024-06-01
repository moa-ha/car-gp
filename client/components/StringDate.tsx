function StringDate({ date }) {
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0') // 월은 0부터 시작하므로 +1
  const day = date.getDate().toString().padStart(2, '0')
  const formattedDate = `${year}-${month}-${day}`
  console.log(formattedDate) // 예상 출력: "2025-02-07"
  return <>{formattedDate}</>
}

export default StringDate
