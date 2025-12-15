let car = {
  make: "Porsche",
  model: "911",
  year: 1964,

  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};
car.description(); //works

// Item A
setTimeout(() => car.description(), 200); //fails

// Item B
let car2 = { ...car };
car2.year = 2024;

console.log(car2);

let car3 = { ...car, year: 2025 };
console.log(car3);
