 // Asks user for value and number of expressions to display.
 
 main();
    
function main (){
    instructions()
    let value = getValue();
    let expressions = getExpressions();
    doMultiplication(value, expressions);
}

function instructions() {
    console.log("Please input a value, then input a number for expressions. Ex: value 3, expressions 4... (3*1, 3*2, 3from*3, 3*4).");
}

function getValue() {
    value = prompt("Please input a value (number).");
    return value;
}

function getExpressions() {
    expressions = prompt("Please input amount of expressions.");
    return expressions;
}

function doMultiplication(value, expressions) {
    let multiplication = value * expressions;
    var countdown
    console.log(value + " * " + expressions + " = " + multiplication);
    while (expressions > 1) {
        expressions = expressions - 1;
        countdown = value * expressions;
        console.log(value + " * " + expressions + " = " + countdown);
    }
    console.log("Thank you for using the program!");
    return multiplication;
}
