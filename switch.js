
let role = 'admin';

switch(role) {
    case 'admin' : 
        console.log('Welcome Admn');
        break;

    case 'guest' : 
        console.log('Welcome Guest');
        break;

    case 'moderator' :
        console.log('Welcome Moderator');
        break;

    default : 
        console.log("You don't exist");
}