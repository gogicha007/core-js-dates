function getWeekNumberByDate(date) {
  console.log(date)
  const weekdays = [
    'sun',
    'monday',
    'tuesday',
    'wen',
    'thu',
    'fri',
    'sat',
  ]
  const wDay = 1 // for monday
  const startOfYear = new Date(date.getFullYear(), 0, 1)
  const firstMonday = new Date(date.getFullYear(), 0, 1)
  firstMonday.setDate(firstMonday.getDate() + (((wDay + 7 - firstMonday.getDay()) % 7) || 7))
  console.log(startOfYear)
  console.log(firstMonday)
  const diff = Math.ceil((date - firstMonday) / (24 * 3600 * 1000) / 7)
  console.log(startOfYear < firstMonday)
  return diff + (startOfYear < firstMonday ? 1 : 0)
}


console.log(getWeekNumberByDate(new Date(2017, 7, 21)));
