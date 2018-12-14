//INITIAL SOLUTION  --- POOR METHOD

// function countTruthy(array) {
//     let results = [];    // Array to store truthy values
//     for (let value of array) 
//         if (value !== 0 && value !== undefined && value !== null && value !== '' && value !== NaN && value !== false) {
//             results.push(value);
//         }
//     let arrLength = results.length;
//     console.log(arrLength);
// }
// const array = [0, 1, 2, 3, 4, undefined, '', null, ];
// countTruthy(array);

// Better METHOD
// PHILOSOPHY -- The javascript engine checks by default whether a value is truthy or not 

function countTruthy(array) {
    let count = 0;
    for (let value of array) 
        if (value)
            count++;
    console.log(count);
}

const array = [0, null, 2, 4, 6, undefined, 8, false, 10];
countTruthy(array);