function solution(D){
 const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const sums = {'Mon': 0, 'Tue': 0, 'Wed': 0, 'Thu': 0, 'Fri': 0, 'Sat': 0, 'Sun': 0};

  // Loop through all keys in Dictionary
  Object.keys(D).forEach((key) => {
    // Convert key to date object and get day of week
    const dateObj = new Date(key);
    const dayOfWeek = daysOfWeek[dateObj.getDay()];

    // Add value to sums object for corresponding day of week
    sums[dayOfWeek] += D[key];
  });

  // Loop through days of week and fill missing days with mean of previous and next days
  daysOfWeek.forEach((day, i) => {
    if (sums[day] === 0) {
      const prevDay = daysOfWeek[i === 0 ? 6 : i - 1];
      const nextDay = daysOfWeek[(i + 1) % 7];
      const meanVal = Math.round((sums[prevDay] + sums[nextDay]) / 2);
      sums[day] = meanVal;
    }
  });

  return sums;
}
