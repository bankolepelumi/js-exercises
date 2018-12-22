const message = 'This is my\n' + '\'first\' message'; 
console.log(message);

// function getAge(number) {
//     console.log(number);
// }
// check out this function ${getAge(56)}


// Cleaner  
// Placeholder -- ${"any expression that returns a value"}
// Useful for sending out emails
const name = "Dave"
const another = 
`Hi ${name} ${"any expression that returns a value"},

Thank you for joining my mailing list. You are now one of the ${500 * 500} poeple I'll be spamming on a daily. *insert smiley here*


Regards,
Mosh`; 
console.log(another);