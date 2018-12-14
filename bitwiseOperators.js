// 1 = 0000001
// 2 = 0000010
// R = 0000011 = 3

console.log(1 | 2 );  // Bitwise OR

// 1 = 0000001
// 2 = 0000010
// R = 0000000 = 0 
console.log(1 & 2 );  // Bitwise OR


// REal world example - An access control System
// Read, Write, Execute
// 00000100 - Read only
// 00000010 - Write
// 00000001 - Execute

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission  | writePermission;

console.log(myPermission);

let message = (myPermission & readPermission) ? 'yes': 'no';

console.log(message);