// logical AND &&
console.log('LOGICAL AND &&');
// Returns TRUE if both operands are TRUE
//console.log(false && false);

// Real life example
// Grant a person a loan if the person has a high income and a good credit score
let income = 200001;
let creditScore = 50;

let highIncome = income > 200000 ? true : false;
let goodCreditScore = creditScore > 50 ? true : false;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);

//LOGICAL OR
console.log('LOGICAL OR ||');
// Returns TRUE if one of the operands is TRUE
//console.log(false || false);

// Real life example
// Grant a person a loan if the person has a high income or a good credit score
let income2 = 200001;
let creditScore2 = 50;

let highIncome2 = income2 > 200000 ? true : false;
let goodCreditScore2 = creditScore2 > 50 ? true : false;
let eligibleForLoan2 = highIncome2 || goodCreditScore2;

console.log(eligibleForLoan2);


//LOGICAL NOT !
console.log('LOGICAL NOT !');
// Real life example
// Grant a person a loan if the person has a high income or a good credit score
let income3 = 200001;
let creditScore3 = 50;

let highIncome3 = income3 > 200000 ? true : false;
let goodCreditScore3 = creditScore3 > 50 ? true : false;
let eligibleForLoan3 = highIncome3 || goodCreditScore3;

console.log('Eligible', eligibleForLoan3);

let applicationRefused = !eligibleForLoan3;

console.log('Application Refused', applicationRefused);