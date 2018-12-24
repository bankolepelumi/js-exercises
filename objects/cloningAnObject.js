const circle = {
    radius: 1,
    draw() {
        console.log('git it, get it ;-)');
    }
}

const circle4 = {
    radius: 1,
    diameter: 2,
    noOfTangents: 3,
    draw() {
        console.log('git it, get it ;-)');
    }
}

// Cloning method 1
const another = {};
for (let key in circle)
    another[key] = circle[key];

console.log(another.draw());

// Cloning method 2... Using the object.assign method
const another1 = Object.assign({}, circle);
console.log(another1);

// Cloning method 3... Using the object.assign method and adding to it...the object.assign method to copy from more than one source object and combine the result into one destination object
const another2 = Object.assign({
    color: 'yellow'
}, circle, circle4);
console.log(another2);

// Cloning method 4... Using the spread operator (...)..The spread operator takes all the properties and methods from the source object and puts them between its parent curly braces
const another3 = {...circle };
console.log(another3.draw);