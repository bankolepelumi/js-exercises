// Create an address object with the following properties
// Street
// City
// Zipcode
// then show the address

const address = {
    street: 'Obafemi Awolowo Way',
    city: 'Lagos',
    zipCode: '23401'
}

function showAddress(object) {
    for (let value in address)
        console.log(value + ': ' + address[value]);
}

showAddress(address);