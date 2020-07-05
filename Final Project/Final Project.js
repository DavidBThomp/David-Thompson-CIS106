//Final Project - XML Page

//Time Line
//Thursday : Begin getting input from website X
//Friday : Website input fully functional (validate website exists and data from site is good) X
//Saturday : Begin Processing website data into arrays (name, description, calories, price) 
//Sunday : Validating Website data (Caps, whitespace, integers vs strings)
//Monday: Display Data as "name - description - calories - price"
//Tuesday : Total values and display totals "0 items - 0 average calories - $0.00 average price"
//Confirm project works and final submission

//Actual Time
//Thursday : Request to see if page is functional, then take XML from page.
//Friday : Can not get a way to convert the XML string into readable xml for JavaScript...
//Saturday : Managed to get values of data I need but have a lot of whitespace elements in array. Will remove white space tonight.


//Refrences
//Extracting XML file: https://stackoverflow.com/questions/50025134/how-to-extract-xml-data-from-a-url-link-with-jquery-or-javascript/50025854
//Reading Headers : https://www.w3schools.com/js/js_ajax_http.asp
//Getting Tags from string: https://stackoverflow.com/questions/11398419/trying-to-use-the-domparser-with-node-js
//

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

main();

function main() {
    let text = requestPage();
    let array = getArray(text);
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
    var breakText = fixfile.split('>')
    breakText.splice(0, 2);
    breakText.pop()
    breakText.pop() 

    var goodarray = []
    var holder;
      for(var i = 0; i < breakText.length; i += 1) { 
        holder = breakText[i].split("<")[0];
        goodarray.push(holder);
      }
    var array = goodarray.filter(String)
    console.log(array);
    return array;
}
