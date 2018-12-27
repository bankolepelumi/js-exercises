// const address = {
//     street: 'Obafemi Awolowo Way',
//     city: 'Lagos',
//     zipCode: '23401'
// }

// Factory Function
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

let address1 = createAddress('Obafemi Awolowo Way', 'Lagos', '23401');
console.log(address1);


// Constructor Function
function CreateAd(street, city, zipCode) {
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
}

const address2 = new CreateAd('Obafemi Awolowo Way', 'Lagos', '23401');
console.log(address2);