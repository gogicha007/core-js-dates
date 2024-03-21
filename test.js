function getWorkSchedule(period, countWorkDays, countOffDays) {
  const start = new Date(period.start.split('-').reverse().join('-'));
  const end = new Date(period.end.split('-').reverse().join('-'));

  let theDate = start;
  let year = 0;
  let month = 0;
  let day = 0;
  let stepWork = countWorkDays;
  let step = 0;
  const datesArr = [];
  while (theDate <= end) {
    year = theDate.getFullYear();
    month =
      theDate.getMonth() < 10
        ? `0${theDate.getMonth() + 1}`
        : theDate.getMonth() + 1;
    day = theDate.getDate() < 10 ? `0${theDate.getDate()}` : theDate.getDate();
    datesArr.push(`${day}-${month}-${year}`);
    stepWork -= 1;
    step = stepWork !== 0 ? 1 : countOffDays+1;
    theDate.setDate(theDate.getDate() + step);
    stepWork = stepWork === 0 ? countWorkDays : stepWork;
  }
  return datesArr;
}

console.log(getWorkSchedule({ start: '01-01-2024', end: '10-01-2024' }, 1, 1));
