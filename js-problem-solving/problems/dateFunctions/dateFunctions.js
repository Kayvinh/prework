function getToday() {
  // Add any parameters you need. Good luck!
  const date = new Date();
  return date;
}

function isWeekend(date) {
  // Add any parameters you need. Good luck!
  if(date.getDay() === 5 || date.getDay() === 6)
    return true;
  
  return false;
}

function getMonthName(date) {
  // Add any parameters you need. Good luck!
  const months = ["January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"];
  
  let month = months[date.getMonth()];
  return month;
}
