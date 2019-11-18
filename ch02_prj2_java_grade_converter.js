console.log("Welcome to the grade converter");

console.log("enter something: ");
var readlineSync = require('readline-sync');
let str = readlineSync.question('enter a string:');
console.log("you entered: " + str);
for (let i = 0; i < 5; i++) {
    // generate random # between 60 and 100
    let pct = (Math.floor(Math.random() * 41)) + 60;
    console.log("Numeric Grade = " + pct);

    let letterGrade = "F";
    if (pct >= 88) {
        letterGrade = "A";
    }
    else if (pct >= 80) {
        letterGrade = "B";
    }
    else if (pct >= 67) {
        letterGrade = "C";
    }
    else if (pct >= 60) {
        letterGrade = "D";
    }
    console.log("Letter grade = " + letterGrade);
}