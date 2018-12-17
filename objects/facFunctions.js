// Factory functions : functions that create objects
function createCircle(radius, ) {
    return {
        radius,   //since key and value names are the same we can leave the key only
        draw() {  // One way of declaring methods
            console.log('draw');
        },

        draw2: function() {  // Another way of declaring methods
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(3);
console.log(circle2);