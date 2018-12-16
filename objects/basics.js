let radius = 1;
let x = 1;
let y = 1;


// OOP 
// the value of a key in an object can be anytihing
// When a function is part of an object it is called a method
let circle = {
    radius: 1,
    lacation: {
        x: 1,
        y: 1
    },
    isVisible: true, 
    draw: function() {
        console.log('draw');
    }
};

// Draw method
circle.draw();