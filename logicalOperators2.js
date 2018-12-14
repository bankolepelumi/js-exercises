// Logical operators with non-boolean values

// Falsy (false) values
// undefined
// null
// 0
// ''
// NaN

// Anything that is not Falsy

//short-circuiting picks the first non-falsy value
// Real world application
// User cna select a color, If user does not a default color is used
let userColor = undefined;
let defaultColor = 'black';
let currentColor = userColor || defaultColor;

console.log(currentColor);