// Value is stored in the stack
const name = 'John';
const age = 30;

// Reference is stored in the heap
const person = {
  name: 'Sanket',
  age: 40,
};

let newName = name;
newName = 'Shekhar';

let newPerson = person;
newPerson.name = 'Sushant';

console.log(name, newName); // John, Shekhar
console.log(person, newPerson); // { name: 'Sushant', age: 40 }, { name: 'Sushant', age: 40 }
