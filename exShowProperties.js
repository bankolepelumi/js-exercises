// Function to display all the strings in the object given

function showProperties(obj) {
    for (let value in obj) {
        if (typeof obj[value] === "string")
            console.log(value, obj[value]);
    }
}

const movie = {
    title: 'a',
    releaseYear: 2917,
    director: 'rio',
    imdbRating: 7.8,
    noOfActors: 8,
    directorGender: 'f'
}

showProperties(movie);