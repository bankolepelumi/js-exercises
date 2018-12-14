//Performing a task
function greet(name, lastName) {   //name is a parameter here
    alert('Waddup ' + name + ' ' + lastName);
}
greet('Danny', 'Mendez'); //name is an argument here
greet('Manny', 'Hersheys');

// Calculating a value
function square(number) {
    return number * number;
}
let answer = square(67);
console.log(answer);
//OR
console.log(square(3));