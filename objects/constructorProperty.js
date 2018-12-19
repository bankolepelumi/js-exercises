// Factory function
function createCircle(radius) {
    return {
        radius: radius,
        draw (){
            console.log('Do not draw');
        }
    };
}
const circle = createCircle(5);
console.log(circle.constructor);

// Constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('git me');
    }
}

const another = new Circle(4);
console.log(another.constructor);

// Other inbuilt constructors
new String(); // String constructor instead we use string literals '', "", ``
new Boolean(); // Boolean Constructor, instead we use boolean literals: true, false
new Number(); // Number Constructor literals, instead we use number literals: 1, 2, 3, 