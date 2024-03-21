function getWeekNumberByDate(date) {
  console.log(date)
  const startOfYear = new Date(Date.UTC(date.getFullYear(), 0, 1));
  console.log(startOfYear);
  const firstMondayDate = 1 + ((8 - startOfYear.getDay()) % 7);
  const firstMonday = new Date(
    Date.UTC(date.getFullYear(), 0, firstMondayDate)
  );
  console.log(firstMonday);
  // console.log(tempDate);
  startOfYear.setDate(startOfYear.getDate() + (startOfYear.getDay() % 7));
  return Math.round((date - firstMonday) /  (24 * 3600 * 1000) / 7);
}

console.log(getWeekNumberByDate(new Date(2024, 0, 3)));

function findFirstMonday(dateString) {
  let targetDate = new Date(dateString);
  let targetMonth = targetDate.getMonth();
  let targetYear = targetDate.getFullYear();
  let firstDateInMonth = new Date(targetYear, targetMonth, 1);
  let firstWeekdayInMonth = firstDateInMonth.getDay();
  let firstMondayDate = 1 + ((8 - firstWeekdayInMonth) % 7);
  return new Date(
    targetYear,
    targetMonth,
    firstMondayDate
  ).toLocaleDateString();
}
