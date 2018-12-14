// declaring an object
let person = {
    name: 'Banky',
    age: 18
}

console.log(person);

// Dot Notation to access object properties
person.name = 'Dave';

console.log(person.name);
console.log(person);

// Bracket Notation to access object properties
person['name'] = 'Pelumi';

console.log(person.name);
console.log(person);

// Advantage of bracket notation
// When we do not know the property that a user may want to select
let userSelection = 'name';
person[userSelection] = 'Esther';

console.log(person.name);
console.log(person);

let dog = {
    breed: 'rot',
    age: 5,
    name: 'Captain',
    color1: 'Black',
    color2: 'Gold',
    eyeColor: 'Green'
}

console.log(dog.color1 + '-' + dog.color2 + ' ' + dog.breed);