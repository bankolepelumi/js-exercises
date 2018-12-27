// Date Object
const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 11, 27, 2, 11, 23, 123); // Month is zero-based i.e. 0 => January & 11 => December
// Date(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date
// All unspecified parameters are initialized to zero

// Get and set methods
console.log(now.getTimezoneOffset());
console.log(now.getSeconds());
console.log(now.getDate());
console.log(now.getFullYear());


console.log(now.setFullYear(2017));
console.log(now.setDate(20)); // Sets the numeric day-of-the-month value of the Date object using local time.

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString()); // Commonly used in web app to transfer dates between the web and server

