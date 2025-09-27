const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");

function ItemA() {
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const totalMinutes = hours * 60 + minutes;

  console.log("Current time is " + today.toLocaleTimeString());
  console.log(hours + " hours have passed so far today");
  console.log(totalMinutes + " minutes have passed so far today");
}

// Item B
function ItemB() {
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  console.log("Current time is " + today.toLocaleTimeString());
  console.log(hours + " hours have passed so far today");
  console.log(minutes + " minutes have passed so far today");
}

// Item C
function ItemC() {
  const myBirthDate = new Date("1990-04-03");

  const years = today.getFullYear() - myBirthDate.getFullYear();
  const months = today.getMonth() - myBirthDate.getMonth();
  const days = today.getDate() - myBirthDate.getDate();

  console.log(`I am ${years} years, ${months} months and ${days} days old`);
}

// Item D
function daysInBetween(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const diffInMs = Math.abs(d2 - d1);
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  return diffInDays;
}

console.log ("daysInbetween", daysInBetween('1990-03-01', '1995-03-05'));
