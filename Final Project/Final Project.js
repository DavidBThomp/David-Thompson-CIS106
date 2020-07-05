//Final Project - XML Page

//Time Line
//Thursday : Begin getting input from website X
//Friday : Website input fully functional (validate website exists and data from site is good) X
//Saturday : Begin Processing website data into arrays (name, description, calories, price)  X
//Sunday : Validating Website data (Caps, whitespace, integers vs strings) 
//Monday: Display Data as "name - description - calories - price" X
//Tuesday : Total values and display totals "0 items - 0 average calories - $0.00 average price" X
//Confirm project works and final submission

//Actual Time
//Thursday : Request to see if page is functional, then take XML from page.
//Friday : Can not get a way to convert the XML string into readable xml for JavaScript...
//Saturday : Managed to get values of data I need but have a lot of whitespace elements in array. Will remove white space tonight.
//Sunday : Got all data into seperate arrays, and can display results needed. Only thing left is Sunday's objective of validating data.


//Refrences
//Extracting XML file: https://stackoverflow.com/questions/50025134/how-to-extract-xml-data-from-a-url-link-with-jquery-or-javascript/50025854
//Reading Headers : https://www.w3schools.com/js/js_ajax_http.asp
//Getting Tags from string: https://stackoverflow.com/questions/11398419/trying-to-use-the-domparser-with-node-js
//.filter(string) help : https://stackoverflow.com/questions/281264/remove-empty-elements-from-an-array-in-javascript
//

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

main();

function main() {
    let text = requestPage();
    let array = getArray(text);
    let name = getName(array)
    let description = getDescription(array);
    let calorie =  getCalorie(array)
    let price =  getPrice(array)

    displayMenuStats(name, calorie, price);
    let number = promptItem(name);
    displayItem(name, description, calorie, price, number);

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

function displayMenuStats(name, calorie, price) {
  console.log("There are " + name.length + " items on the menu.")
  
  var totalcalories = calorie.reduce(function(a, b){return a + b}, 0 )
  console.log("The average amount of calories per item are " + totalcalories/calorie.length + ".")

  var totalprice = price.reduce(function(a, b){return a + b}, 0 )
  console.log("The average price per item is $" + (totalprice/price.length).toFixed(2) + ".")
}

function promptItem(name) {
    console.log('\n')
  for(var i = 0; i < name.length; i += 1) { 
    var addition = (i+1);
    console.log(addition + ") " +name [i])
    }
    var number = prompt('\n' + "What item would you like to get the description, calories, and price for? Please use numbers to represent item");
    return number;
}

function displayItem(name, description, calorie, price, number) {
    console.log("Name - " + name[number -1]);
    console.log("Description - " + description[number - 1]);
    console.log("Calories - " + calorie[number - 1]);
    console.log("Price - $" + price[number - 1]);    

    //The way data is displayed on final project page

    //for(var i = 0; i < name.length; i += 1) { 
      //console.log("Name - " + name[i])
      //console.log("Description - " + description[i])
      //console.log("Calories - " + calorie[i])
      //console.log("Price - $" + price[i])
    //}
}
