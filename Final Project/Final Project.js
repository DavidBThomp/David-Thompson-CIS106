const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

main();

function main() {
    let text = requestPage();
    let array = getArray(text);
    let name = getName(array)
    let description = getDescription(array);
    let calorie =  getCalorie(array)
    let price =  getPrice(array)

    let number = promptItem(name);
    displayItem(name, description, calorie, price, number);
    displayMenuStats(name, calorie, price);
}

function requestPage() {
    let request = new XMLHttpRequest();
    let url = "https://www.w3schools.com/xml/simple.xml";
    request.open("GET", url, false);
    request.send(null);
    return request.responseText;
}

function getArray(text) {    
    var fixfile = text.replace(/\r\n\s+/g, "");
    var breakText = fixfile.split('>');
    breakText.splice(0, 2);
    breakText.pop();
    breakText.pop() ;

    var goodarray = [];
    var holder;
      for(var i = 0; i < breakText.length; i += 1) { 
        holder = breakText[i].split("<")[0];
        goodarray.push(holder);
      }
    var array = goodarray.filter(String);
    return array;
}

function getName(array) {
    var name = [];
    for(var i = 0; i < array.length; i += 4) { 
      name.push(String(array[i]));
    }
    return name;
}

function getDescription(array) {
  var description = [];
  for(var i = 2; i < array.length; i += 4) { 
    description.push(String(array[i]));
  }
  return description;
}

function getCalorie(array) {
  var calorie = [];
  for(var i = 3; i < array.length; i += 4) { 
    calorie.push(Number(array[i]));
  }
  return calorie;
}

function getPrice(array) {
  var price = [];
  var test;
  for(var i = 1; i < array.length; i += 4) { 
    test = array[i].replace("$", '');
    price.push(Number(test));
  }
  return price;
}

function promptItem(name) {
    for(var i = 0; i < name.length; i += 1) { 
    var addition = (i+1);
    console.log(addition + ") " +name [i])
    }
    var number = prompt("What item would you like to get the description, calories, and price for? Please use numbers to represent item.");
    return number;
}

function displayItem(name, description, calorie, price, number) {
    console.log("Name - " + name[number -1]);
    console.log("Description - " + description[number - 1]);
    console.log("Calories - " + calorie[number - 1]);
    console.log("Price - $" + price[number - 1]);    
}

function displayMenuStats(name, calorie, price) {
    console.log("There are " + name.length + " items on the menu")
    
    var totalcalories = calorie.reduce(function(a, b){return a + b}, 0 )
    console.log("The average amount of calories per item are " + totalcalories/calorie.length)

    var totalprice = price.reduce(function(a, b){return a + b}, 0 )
    console.log("The average price per item is $" + (totalprice/price.length).toFixed(2))
}
