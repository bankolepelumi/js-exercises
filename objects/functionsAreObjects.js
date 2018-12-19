function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw us');
    }
}

// Methods
Circle.call({}, 1); // Used to call a function... the first argument specifiec the target of 'this'.... this line does the same this as 'new Circle(67)'
Circle.apply({}, [1]); // Same as the call method but passes the arguments as an array....Used to pass arrays as an argument when building an application

const another = new Circle(67);

console.log(Circle.name);
console.log(Circle.length);
console.log(Circle.prototype);
console.log(Circle.caller);
console.log(Circle.constructor);

const Circle1 = new Function('radius', `
    this.radius = radius;
    this.draw = function() {
    console.log('draw us');
    }
`);

const circle = new Circle1(1);
console.log(circle);