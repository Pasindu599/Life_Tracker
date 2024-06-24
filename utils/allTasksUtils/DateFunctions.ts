export function getDateString(currentDate: Date, daysOffSet = 0) {
  const adjustedDate = new Date(currentDate);
  adjustedDate.setDate(currentDate.getDate() + daysOffSet);

  const year = adjustedDate.getFullYear();
  const month = String(adjustedDate.getMonth() + 1).padStart(2, "0");
  const day = String(adjustedDate.getDate()).padStart(2, "0");
  console.log(adjustedDate);

  return `${year}-${month}-${day}`;
}

export function getCurrentDayName(dateString: string) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date(dateString);
  return daysOfWeek[currentDate.getDay()];
}

export function getFormattedDate(dateString: string) {
  const currentDate = new Date(dateString);
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = currentDate.getDate();
  const month = monthName[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  const formattedDate = `${day} ${month} ${year}`;
  return formattedDate;
}
