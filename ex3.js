const animals1 = ['Tiger', 'Giraffe']
console.log(animals1)

// Item A
const animals2 = ['Tiger', 'Giraffe']
animals2.push(`Lion`, `Elephant`)
console.log(animals2)

// Item B
const animals3 = ['Tiger', 'Giraffe']
animals3.unshift ('Pig', `Ship`)
console.log(animals3)

// Item C
const animals4 = [ `Pig`, 'Ship', 'Tiger', 'Giraffe', `Lion`, `Elephant`];
animals4.sort();
console.log(animals4)

// Item D
const animals5 = [ 'Pig', 'Ship', 'Tiger', 'Giraffe', 'Lion', 'Elephant' ];

function replaceMiddleAnimal(newValue) {
  const middleIndex = Math.floor(animals5.length / 2);
  animals5[middleIndex] = newValue;
}

replaceMiddleAnimal('Zebra');
console.log(animals5);

// Item E
let animals = [ 'Pig', 'Ship', 'Tiger', 'Giraffe', 'Lion', 'Elephant' ];

function findMatchingAnimals(beginsWith) {
  return animals.filter(animal => 
    animal.toLowerCase().startsWith(beginsWith.toLowerCase())
  );
}

console.log(findMatchingAnimals('t'));  // ['Tiger']
console.log(findMatchingAnimals('S'));  // ['Ship']
console.log(findMatchingAnimals('e'));  // ['Elephant']

console.log("---")

function findAnimalsLenghtPlusThree () {
  return animals.filter(animal => 
    animal.length>3
  );
}

console.log(findAnimalsLenghtPlusThree());