// Function t return the multiples of 3 & 5

function sum(limit) {
    let sumOf = 0;
    for (let i = 0; i <= limit; i++) {
        if ((i % 3 === 0) || (i % 5 === 0))
            sumOf += i;
    }
    console.log(sumOf);
}

sum(18);