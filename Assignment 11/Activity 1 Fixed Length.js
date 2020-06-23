// Calculates the average of numbers entered.
   
main();   

function main() {
    instructions();
    let amount = getAmount();
    let grades = getGrades(amount);
    let order = displayOrder(grades);
    arrayMax(grades);
    arrayMin(grades);
    arrayAverage(order, amount);
}

function instructions() {
    console.log("This program will average out a set of grades.")
}

function getAmount() {
    amount = prompt("How many grades will be entered.");
    return amount;
}

function getGrades(amount) {
    let total = 0;
    let count = 0;
    grades = [];
    console.log("Please enter grades.");
    while (count < amount) {
        scores = prompt("");
        count = count + 1;
        total += Number(scores);
        grades.push(Number(scores));
    }
    return grades;
}

function displayOrder(grades) {
    let order = grades.sort(function(a, b){return a-b});
    console.log("The grades sorted from lowest to highest are " + order + ".");
    return order;
}

function arrayMax(grades){
    let max = Math.max.apply(null, grades);
    console.log("The maximum grade is " + max + ".")
}

function arrayMin(grades){
    let min = Math.min.apply(null, grades);
    console.log("The minimum grade is " + min + ".")
}

function arrayAverage(order, amount){
    var sum = 0
    for (var i = 0; i<order.length; i++){
        sum += order[i]
    }
    let average = (sum / amount)
    console.log("The average grade is " + average + ".")
    }
