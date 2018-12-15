function calculateGrade(marks) { 
    let avg = calculateAverage(marks);
    if (avg < 50) return 'F';
    if (avg < 60) return 'E';
    if (avg < 70) return 'D';
    if (avg < 80) return 'C';
    if (avg < 90) return 'B';
    if (avg < 100) return 'A';
}

function calculateAverage(array) {
    let noOfSubjects = array.length;
    let sum = 0;
    for(let value of array)
        sum += value;
    let av = sum / noOfSubjects;
    return av;
}

const marks = [80, 20, 50];

console.log(calculateGrade(marks));