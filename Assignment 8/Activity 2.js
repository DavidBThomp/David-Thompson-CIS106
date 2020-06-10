// Calculates the average of numbers entered.

main();   

function main() {
    let amount = getAmount();
    runLoop(amount);

}

function getAmount() {
    amount = prompt("How many numbers will be entered?");
    return amount;
}


function runLoop(amount,scores) {
    loop = 0;
    count = 0;
    total = 0;
    console.log("Please enter scores.");
    while (count < amount) {
        scores = prompt("");
        total = scores;
        console.log(total);
        count = count + 1;
    }
    console.log("The average is " + total/amount + ".");
    return loop;
}
