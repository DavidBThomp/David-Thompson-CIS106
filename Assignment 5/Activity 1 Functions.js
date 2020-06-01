//Calculate weekly, monthly, and annual gross pay (based on 12 months per year and 52 weeks per year)
main();

function main(){
    var hours;
    hours = getHours();
    var pay;
    pay = getPay();
    var week;
    week = getWeek();
    var month;
    month = getMonth()
    var year;
    year = getYear();
    var results;
    results = getResults();
}

function getHours(){
    var hours = prompt("Average hours per week");
}

function getPay(){
    var pay = prompt ("Rate of pay per hour");
}

function getWeek(hour,pay){
    var getWeek = hour * pay;
    return getWeek;
}

function getMonth(week){
    var getMonth = week * 4;
    return getMonth;
}

function getYear(month){
    var getYear = month * 12;
    return getYear;
}

function getResults(week,month,year){
    console.log("Weekly pay: " + week);
    console.log("Monthly pay: " + month);
    console.log("Annual pay: " + year)
}
