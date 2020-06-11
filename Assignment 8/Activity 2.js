// Calculates the average of numbers entered.
   
main();   

function main() {
    instructions();
    let amount = getAmount();
    let count = 0;
    let total = 0;
    runLoop(total, count, amount);
}

function instructions() {
    console.log("This program will average out a set of numbers.")
}

function getAmount() {
    amount = prompt("How many numbers will be entered.");
    return amount;
}


function runLoop(total, count, amount) {
    loop = 0;
    console.log("Please enter scores.");
    while (count < amount) {
        scores = prompt("");
        count = count + 1;
        total = Number(total) + Number(scores);
    }
    console.log("The average is " + total/amount + ".");
    return loop;
}
