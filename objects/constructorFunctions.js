// Factory function which usees camel notation
// Camel Notation: oneTwoThreeFour
function createCircle(radius) {
    return {
        radius,
        draw () {
            console.log('Draw Me');
        }
    }
}

const myCircle = createCircle(1);
console.log(myCircle);
console.log(myCircle.draw());

// Constructor Functions: Used to create functions
// Constructor functions use pascal notation
// Pascal Notation: OneTwoThreeFour
// this: a reference to the object that is executing a piece of code
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(1);
console.log(circle);
console.log(circle.draw());

/* When the 'new' keyword is used, three things happen:
1. An empty object is created e.g. const x = {}
2. The this keyword is set to point to the empty object 
3. The object is returned from the main function (Circle())
*/