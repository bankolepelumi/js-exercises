/// Function that displays n stars on the nth line, where the number of lines is passed as an argument

function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        for (let stars = 1; stars <= row; stars++)
            pattern = pattern + '*';
    console.log(pattern);
    }
}

showStars(6);

// console.log('' + '*');