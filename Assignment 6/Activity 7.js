// Take a dogs name and age and convert into dog years (1 human year = 7 dog years)
main();

function main(){
    var name;
    name = dogName();
    var age;
    age = dogAge();
    var humanAge;
    humanAge = dogHumanAge(age);
    resultDisplay(name,humanAge);
}
    
function dogName(){
    var dogName;
    dogName = prompt("Enter Dog's Name", "Max");
    return dogName;
}
    
function dogAge(){
    var dogAge;
    dogAge = prompt("Enter Dog's Age", "4");
    console.log(dogAge)
    return dogAge;
}
    
function dogHumanAge(dogAge){
    var dogHumanAge;
    dogHumanAge = dogAge * 7;
    return dogHumanAge;
}

function resultDisplay(name,humanAge){
    console.log(name + " is " + humanAge + " in human years!");
}
