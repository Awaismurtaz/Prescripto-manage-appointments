 export const dateTimeFormate = (dayName, timeString) => {
  const dayMap = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };

  const today = new Date();
  const selectedDayIndex = dayMap[dayName];
  const currentDayIndex = today.getDay();

  // Calculate next selected day
  let daysToAdd = selectedDayIndex - currentDayIndex;
  if (daysToAdd < 0) daysToAdd += 7;

  // Final date for appointment day
  const appointmentDate = new Date();
  appointmentDate.setDate(today.getDate() + daysToAdd);

  // Parse time "8.00 am"
  let [time, period] = timeString.split(" ");
  let [hours, minutes] = time.split(".");

  hours = parseInt(hours);
  minutes = parseInt(minutes);

  if (period.toLowerCase() === "pm" && hours !== 12) hours += 12;
  if (period.toLowerCase() === "am" && hours === 12) hours = 0;

  // Set time in appointment date
  appointmentDate.setHours(hours, minutes, 0, 0);

  return appointmentDate.toISOString(); // perfect for backend
};
