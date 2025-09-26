let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 4300,
};

// // Item A
function sumSalaries(salaries) {
  let total = 0;
  for (let key in salaries) {
    total += salaries[key];
  }
  return total;
}

console.log(sumSalaries(salaries));

// Item B
function topEarner(salaries) { //loops through the object and finds the person
  let topName = null; //we initialize it to null because we haven't checked any salaries yet and null is a good place or no one foud yet
  //we could als use an empty string ("") instead of null, but null more clearly means: "no value yet.
  let topSalary = -Infinity;
//
  for (let name in salaries) {
    if (salaries[name] > topSalary) {
      topSalary = salaries[name];
      topName = name;
    }
  }

  return topName;
}

console.log(topEarner(salaries)); // Christina
