const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

main();

function main() {
    let text = requestPage();
    let array = getArray(text);
    let name = getName(array)
    let description = getDescription(array);
    let calorie =  getCalorie(array)
    let price =  getPrice(array)
    console.log(name, description, calorie,price)
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
  for(var i = 1; i < array.length; i += 4) { 
    price.push(Number(array[i]));
  }
  return price;
}

//price has dollar sign, so number is NaN
