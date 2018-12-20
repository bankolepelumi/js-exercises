const circle = {
    radius: 1,
    draw () {
        console.log('draw');
    }
};

// The simplest way to enumerate the properties in an object
for (let key in circle)
    console.log(key, circle[key]);

// for (let key of circle)
//     Console.log(key);   // Doesn't work

// for..of loop can only be used with iterables such as:
// 1. Arrays
// 2. Maps


// *Alternate Method* to use a for...of loop with objects
// This method returns the keys in an object as an array...hereby making it possible to iterate through them

for (let key of Object.keys(circle))
    console.log(key);

 for (let entry of Object.entries(circle))
    console.log(entry);

// To see if a given property or method exists in a given object, we use the in operator
if ('diameter' in circle) console.log('Yes');
    else    
    console.log('NO');