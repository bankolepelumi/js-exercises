// Speed limit = 70
// 5 => 1 point
// Math.floor(1.3)
// 12 points =>suspended

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    const maxPoints = 12;

    if(speed > speedLimit + kmPerPoint) {
        let remnant = speed - speedLimit;
        let points = Math.floor(remnant / kmPerPoint);
        if (points >= maxPoints)
        console.log('Suspended');
        else
            console.log(points);
    }
    else 
    console.log('Ok');
}

checkSpeed(80);