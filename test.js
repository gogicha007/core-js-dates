function getNextFridayThe13th(date) {
  const wDay = 5;
  const theFriday = date;
  theFriday.setDate(
    theFriday.getDate() + ((wDay - theFriday.getDay()) % 7 || 0)
  );
  while (theFriday.getDate() !== 13) {
    theFriday.setDate(theFriday.getDate() + 7);
  }
  console.log(theFriday);
  return theFriday;
}

console.log(getNextFridayThe13th(new Date(2024, 0, 12)));
