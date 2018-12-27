// Constructor Function
function CreateAddress(street, city, zipCode) {
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
}

const address1 = new CreateAddress('Edun', 'Lagos', '23401');
const address2 = new CreateAddress('Edun', 'Lagos', '23401');
const address3 = address1;

// Function to check if the properties are the same
function areEqual(address1, address2) {
    if ( (address1.street !== address2.street) || (address1.city !== address2.city) || (address1.zipCode !== address2.zipCode) ) 
        return 'The two Objects do not have the same properties';
    else {
        return 'The two Objects have the same properties';
    }
}

const result1 = areEqual(address1, address2);
console.log(result1);


function areSame(address1, address2) {
    if ( address1 === address2 ) 
        return 'The two Objects are referencing the same location';   
        
    else {
        return 'The two Objects are not referencing the same location';
    }
}

const result3 = areSame(address1, address3);
console.log(result3);