// Hour 
// Code to greet user based on the time of day


// WE don't need the curly braces when there's only one statement to execute after the condition is checked
let hour = 18;

if (hour >= 6 && hour < 12)
    console.log('Good Morning');
else if (hour >= 12 && hour < 18)
    console.log('Good Afternoon');
else
    console.log('Good Evening');