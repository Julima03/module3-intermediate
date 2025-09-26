function ucFirstLetters(str) {
  const array = str.split("");
  console.log("array", array);
  const resultArray = array.map((word) => {
    const firstletter = word.charArt(0).toUpperCase();
    return firstletter + word.slice(1);
  });
  console.log("resultArray", resultArray);
  return resultArray.join("");
}

console.log(ucFirstLetters("los angeles"));

// Another way of doing it
function ucFirstLetters(str) {
  return str
    .split(" ") // Split the string into words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
    .join(" "); // Join the words back into a single string
}

// Testing different strings
console.log(ucFirstLetters("los angeles")); // Los Angeles
console.log(ucFirstLetters("new york city")); // New York City
console.log(ucFirstLetters("san francisco")); // San Francisco
console.log(ucFirstLetters("hello juliana")); // Hello World
