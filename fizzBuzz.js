// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'

function fizzBuzz(input) {
    if (typeof(input) !== 'number') {return 'Not a Number';}
    else if ((input % 3 !== 0) && (input % 5 !== 0)) {return input;}
    else if ((input % 3 == 0) && (input % 5 == 0)) {return 'FizzBuzz';}
    else if (input % 3 == 0) {return 'fizz';}
    else if (input % 5 == 0) {return 'Buzz';}
}

const output = fizzBuzz();
console.log(output);

// let x= '5';

// if (typeof(x) !== 'number')
//     console.log('nada');