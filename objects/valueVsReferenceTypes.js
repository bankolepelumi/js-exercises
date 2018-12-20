let x = {value: 10};
let y = x;

x.value = 20;

// Primitives are copied by their value
// While objects OR REFERENCE TYPES are copied by their reference

let number = 10;
function increase(number) {
    number++;
    //console.log(number);
}

increase(number.value);
console.log(number);

// Value Types
// Number
// String
// Boolean
// Symbol
// Undefined
// Null

let obj = {value: 10};
function increase(obj) {
    number++;
    //console.log(number);
}

increase(obj.value);
console.log(obj);

// Reference types
// Object
// Function
// Array