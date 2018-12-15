// Function that displays the prime numbers lower than a given limit number where the limit is passed as an argument

function showPrimes(limit) {
    for (let number = 2; number <=limit; number++)
        if(isNumPrime(number)) console.log(number);
}

function isNumPrime(number) {
        for (let factor = 2; factor < number; factor++) 
            if (number % factor === 0) 
                return false;

        return true;
}

showPrimes(100);