const message = '  Waddup people, keep using the ice on a low  ';
console.log(typeof(message));
console.log(message.length);
console.log(message.startsWith('wad'));
console.log(message.endsWith('wad'));
console.log(message.includes('wad'));
console.log(message.indexOf('peo'));
console.log(message.indexOf('p'));
console.log(message.lastIndexOf('p'));
console.log(message.replace('waddup', 'people'));
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.trim());
console.log(message.trimRight());
console.log(message.trimLeft());
console.log(message.split(' '));

// Escape notation
const message2 = 'Marty\'s Mum \n Marty\'s Dad';
console.log(message2);

/* String object
------------- Constructor Function*/
const another = new String('hey');
console.log(typeof(another));
