//Asks user for a list of comma seperated value, then prints each value on seprate line with no commas or lead/trailing spaces
// Refrence to https://www.w3schools.com/jsref/jsref_obj_string.asp from string properties

main();

function main() {
    var input; 
    var newline;
    
    input = getInput();
    newline = processString(input);
    displayOutput(newline);
}


function getInput() {
    input = prompt("Please input values seperated by commas.");
    return input;
}

function processString(input) {
    var whitespace = input.replace(/\s+/g, '');
    var newline = whitespace.replace(/,/g, "\n");
    return newline;
}

function displayOutput(newline) {
  console.log(newline);
}
