//Calculate weekly, monthly, and annual gross pay (based on 12 months per year and 52 weeks per year)
main();

function main(){
    getInstructions();
    let hours = getHours();
    let pay = getPay();
    let week = getWeek(hours, pay);
    let month = getMonth(week)
    let year = getYear(month);
    getResults(week, month, year)
}

function getInstructions(){
  console.log("This program will calculate your payrate, including over time based on average weekly hours and pay.")
}

function getHours(){
    let hours = prompt("Average hours per week");
    if (hours > 0) {
      return hours;
    } 
    else {
      hours = delete hours;
      console.log("Please insert a value greater than 0");
      getHours();
    }
    console.log(hours)
}

function getPay(){
    let pay = prompt ("Rate of pay per hour");
    if (pay > 0) {
      return pay
    }
    else {
      console.log("Please instert a value greater than 0")
      getPay()
    }
}

function getWeek(hours,pay){
  if (hours > 40){
    week = (pay * hours) +((hours - 40) * (pay * 1.5));
    return week;
   }
   else{
    week = pay * hours;
    return week;
  }
}

function getMonth(week){
    let month = week * 4;
    return month;
}

function getYear(month){
    let year = month * 13;
    return year;
}

function getResults(week, month, year){
    console.log("Weekly pay: " + week);
    console.log("Monthly pay: " + month);
    console.log("Annual pay: " + year)
}
