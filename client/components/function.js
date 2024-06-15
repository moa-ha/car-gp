export function stringDate(date) {
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0') // 월은 0부터 시작하므로 +1
  const day = date.getDate().toString().padStart(2, '0')
  const formattedDate = `${year}-${month}-${day}`
  return formattedDate
}

// calculate each accordingly and make it dd/mm/yyyy
export function calculate(date, period) {
  const milSecPeriod = period * 24 * 60 * 60 * 1000
  const dateObject = new Date(date)
  const receivedDate = Number(dateObject.getTime())
  const returnedDate = new Date(receivedDate + milSecPeriod)
  const formattedDate = returnedDate.toLocaleDateString('en-GB')
  return formattedDate
}
