//Approximatley convert age into days, hours, and seconds
main();

function main(){
    var age;
    age = getAge();
    var seconds
    seconds = getSeconds(age);
    var hours;
    hours = getHours(age);
    var days;
    days =  getDays(age);
    var months;
    months = getMonths(age);
    var results;
    results = getResults(seconds, hours, days, months);
}

function getAge(){
    var getAge = prompt("Input age in years: ");
    return getAge;
}

function getSeconds(age){
    var getSeconds;
    getSeconds = age * 31536000; 
    return getSeconds
}
    
function getHours(age){
    var getHours;
    getHours = age * 8760;
    return getHours
}
    
function getDays(age){
    var getDays;
    getDays = age * 365;
    return getDays
}

function getMonths(age){
    var getMonths;
    getMonths = age * 12;
    return getMonths
}

function getResults(seconds, hours, days, months){
    console.log("age in seconds: ",seconds);
    console.log("age in hours: ", hours);
    console.log("age in days: ", days);
    console.log("age in months: ", months);
    return getResults
}
