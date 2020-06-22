// Calculates the average of numbers entered.
   
main();   

function main() {
    instructions();
    let amount = getAmount();
    let grades = getGrades(amount);
    displayAverage(grades);
}

function instructions() {
    console.log("This program will average out a set of numbers.")
}

function getAmount() {
    amount = prompt("How many numbers will be entered.");
    return amount;
}

function getGrades(amount) {
    let total = 0;
    let count = 0;
    grades = [];
    console.log("Please enter scores.");
    while (count < amount) {
        scores = prompt("");
        count = count + 1;
        total += Number(scores);
        grades.push(Number(scores));
        console.log(grades);
    }
    return grades;
}

function displayAverage(grades) {
    const arrayGrades = grades
    console.log(Math.min(arrayGrades))
}
