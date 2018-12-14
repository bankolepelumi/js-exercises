// Used to iterate over the properties of an object

const person = {
    name: 'Femi',
    age: 18,
    degree: 'Computer Science'
}

for (let value in person)
console.log(value, person[value]);

const colors = ['red', 'green', 'blue'];

for (let index in colors) {
    console.log(index, colors[index]);
}


//for...of loop
// Useed to iterate through the elements of an array
// No need of using the index as opposed to for..in
for (let color of colors) {
    console.log(color);
}