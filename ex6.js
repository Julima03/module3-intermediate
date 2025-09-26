const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
const fruits = [ 'grapes', 'banana', 'apple', 'grapes', 'banana' ]
// console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
// console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]
//console.log(unique(fruits)) // ['grapes', 'banana', 'apple']

function unique(duplicatesArray) {
return  [...new Set(duplicatesArray)] //[...new Set(...)] spreads the unique values back into an array.
}

console.log(unique(colours));
console.log(unique(testScores));
console.log(unique(fruits));

