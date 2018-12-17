const circle = {
    radius: 1
};

circle.color = 'yellow';
circle.draw = function() {
    console.log('git');
};

// To remove an object property
delete circle.color;
delete circle.draw;

console.log(circle);