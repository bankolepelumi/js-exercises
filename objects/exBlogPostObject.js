// Create a blog Post Object with the following properties
// -title
// -body
// -author
// -views
// -comments
//     -author, body
// -isLive

// Using the object literal syntax

let blogPost = {
    title: 'Baby Driver',
    body: 'Dummy text',
    author: 'Some random dude',
    views: 456,
    comments: [
        { author: 'Internet Troll1', body: 'Dummy text again' },
        { author: 'Internet Troll2', body: 'Dummy text again' }
    ],
    isLive: true
};

console.log(blogPost);