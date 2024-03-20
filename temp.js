function getDayName(date) {
    const weekday = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const tempDate = new Date(date);
    console.log(tempDate)
    return weekday[tempDate.getUTCDay()];
  }


  console.log(getDayName('25 Jun 2030 20:20:35 UTC'))