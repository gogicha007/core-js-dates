function getWeekNumberByDate(date) {
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const currentDate = date;
  console.log(currentDate);
  const januaryFirst = new Date(Date.UTC(currentDate.getFullYear(), 0, 1));

  console.log(januaryFirst);

  let daysToNextMonday = Math.abs(1 - januaryFirst.getDay());
  if (januaryFirst.getDay() > 1) {
    daysToNextMonday += ((januaryFirst.getDay() + 1) % 7) + 1;
  }
  if (januaryFirst.getDay() === 1) {
    daysToNextMonday = 0;
  }

  console.log(`days to ${daysToNextMonday}`);

  const nextMonday = new Date(Date.UTC(
    currentDate.getFullYear(),
    0,
    januaryFirst.getDate() + daysToNextMonday
  ));
  let plusWeek = 0;
  console.log(nextMonday);

  if (januaryFirst < nextMonday) plusWeek = 1;
  return Math.ceil((currentDate - nextMonday) / (24 * 3600 * 1000) / 7) + plusWeek;
}

console.log(getWeekNumberByDate(new Date(2022, 2, 22)));
