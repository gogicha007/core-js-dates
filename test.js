function getCountDaysOnPeriod(dateStart, dateEnd) {
  let start = new Date(dateStart);
  const end = new Date(dateEnd);
  console.log(`start ${start.valueOf()}`);
  console.log(`end ${end.valueOf()}`);


  const diff = (end.valueOf() - start.valueOf())/(1000*3600*24)
  console.log(diff)
  const startMonthDays = start.getMonth();
  const startMonthDate = start.getDate();
  const endMonthDays = end.getMonth();
  const endMonthdate = end.getDate();
  console.log(startMonthDays);
  return 'daete';
}

console.log(
  getCountDaysOnPeriod('2024-02-01T00:00:00.000Z', '2024-02-02T00:00:00.000Z')
);
