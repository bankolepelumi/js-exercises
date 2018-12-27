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


function CreatePost(title, body, author) {
    this.title = 'Ruination';
    this.body = 'Some text';
    this.author = 'John Doe';
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let post = new CreatePost('a', 'b', 'c');
console.log(post);