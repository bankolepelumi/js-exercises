let a = 'red';
let b = 'blue';

let c = b;
b = a;
a = c;

 console.log(a);
 console.log(b);

// let c = (a = 'red') ? 'blue': 'red';
// let d = (b = 'blue') ? 'red': 'blue';

// console.log(c);
// console.log(d);