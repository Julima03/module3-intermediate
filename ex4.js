function camelCase(cssProp) {
  return cssProp
    .split("-")
    .map((word, index) => {
      if (index === 0) return word; // Keep the first word as is
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
}

console.log(camelCase("margin-left"));
console.log(camelCase("background-color"));
console.log(camelCase("border-top-left-radius"));

// Item C

function camelCaseMithCondition(cssProp) {
  const myArray = cssProp.split("-");
  resultArray = myArray.map((word, index) => {
    if (index === 0) {
      return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return resultArray - join("");
}
console.log(camelCaseWithCondition("margin-left")); // marginLeft



function camelCaseWithoutCondition(cssProp) {
  return cssProp
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word.charAt(0) - toUpperCase() + word.slice(1)
    )
    .join("");
}
console.log(camelCaseWithoutCondition("background-image")); // backgroundImage))
