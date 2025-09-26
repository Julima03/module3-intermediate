let twentyCents = 0.2;
let tenCents = 0.1;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);
// 0.2 + 0.1 = 0.30000000000000004

// // Item A
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen); //why is this not working?
// Because they are both strings

// // Item B
function currencyAddition(float1, float2) {
  return (float1 + float2).tofixed(2);
}

console.log(currencyAddition(1.221, 2.341));

// Item C

function currencyOperation(float1, float2, operation) {
  switch (operation) {
    case "+":
      return (float1 + float2).toFixed(2);
    case "-":
      return (float1 - float2).toFixed(2);
    case "/":
      return (float1 / float2).toFixed(2);
    case "*":
      return (float1 * float2).toFixed(2);
  }
}

console.log(currencyOperation(1.221, 2.341, "*"));

// // Item D
function currencyOperationToExtended(float1, float2, operation, numDecimals) {
  switch (operation) {
    case "+":
      return (float1 + float2).toFixed(numDecimals);
    case "-":
      return (float1 - float2).toFixed(numDecimals);
    case "/":
      return (float1 / float2).toFixed(numDecimals);
    case "*":
      return (float1 * float2).toFixed(numDecimals);
  }
}
console.log(currencyOperationToExtended(1.221, 2.341, "*", 4));
