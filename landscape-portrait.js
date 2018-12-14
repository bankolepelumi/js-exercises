function isLandscape(width, height) {
    return (width > height) ? 'Landscape': 'Portrait';
}

let orientation = isLandscape(2, 3);
console.log('The Orientation of the photo is',orientation);


// using conditional operators
function isLandscape2(wid, hei) {
    return (wid > hei);
}

let orientation2 = isLandscape2(4, 3);
let ans = (orientation2 === true) ? 'Landscape': 'Portrait';
console.log('The Orientation of the photo is', ans);