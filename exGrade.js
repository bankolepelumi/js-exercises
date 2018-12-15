function calculateGrade(marks) {
    let noOfSubjects = marks.length;
    let sum = 0;
    for(let i = 0; i < noOfSubjects; i++)
        sum += marks[i];
    let avg = sum / noOfSubjects;
    if (avg < 60) console.log('F');
    if (avg >= 50 && avg < 60) console.log('E');
    if (avg >= 60 && avg < 70) console.log('D');
    if (avg >= 70 && avg < 80) console.log('C');
    if (avg >= 80 && avg < 90) console.log('B');
    if (avg >= 90 && avg < 100) console.log('A');
}

const marks = [80, 80, 50, 100, 100];

calculateGrade(marks);