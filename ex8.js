const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");

// // // Item A
const phoneBookDEF = new Map();
phoneBookDEF.set("");
phoneBookDEF.set("");
phoneBookDEF.set("");

console.log(phoneBookDEF);

// Item B
const phoneBookDEF1 = new Map([
  ["Douglas", "0453382578"],
  ["Ellen", "0452669800"],
  ["Flynn", "0419981733"],
]);

console.log(phoneBookDEF1);

// Item C
phoneBookABC.set("Caroline", "0499888777");
console.log(phoneBookABC);

// Item D
function printPhoneBook(contacts) {
  for (const [name, number] of contacts) {
    console.log(`${name}: ${number}`);
  }
}


// Item E 
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF1]);
console.log(phoneBook); // Print the combined phone book

// The spread operator (...) is often used to clone or merge objects while transforming them in .map().

// Item F
printPhoneBook(phoneBook)