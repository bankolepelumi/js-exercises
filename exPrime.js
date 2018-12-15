// Function that displays the prime numbers lower than a given limit number where the limit is passed as an argument

function showPrimes(limit) {
    for (let number = 2; number <=limit; number++) { 

        let isPrime = true;
        for (let factor = 2; factor < number; factor++) {
            if (number % factor === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime === true)
            console.log(number);
    }
}

showPrimes(100);