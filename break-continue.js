let i = 0;
while (i <= 10) {
    // if (i === 6) {
    //     break;
    // }
    if (i % 2 === 0){
        i++;
        continue;
    }
    console.log(i);
    i++;
}