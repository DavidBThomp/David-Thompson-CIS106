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
//


//Refrences
//Extracting XML file: https://stackoverflow.com/questions/50025134/how-to-extract-xml-data-from-a-url-link-with-jquery-or-javascript/50025854
//Reading Headers : https://www.w3schools.com/js/js_ajax_http.asp
//


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
//

//Refrences:
//Extracting XML file: https://stackoverflow.com/questions/50025134/how-to-extract-xml-data-from-a-url-link-with-jquery-or-javascript/50025854
//Reading Headers : https://www.w3schools.com/js/js_ajax_http.asp
//https://www.npmjs.com/package/xmlhttprequest
//https://en.wikiversity.org/wiki/JavaScript_Programming/AJAX_and_JSON/Example_Code

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

main();

function main() {
    requestPage();
}

function requestPage() {
    let request = new XMLHttpRequest();
    let url = "https://www.w3schools.com/xml/simple.xml";
    request.open("GET", url);
    request.onload = function() {
        processXML(request.responseText);
    };
    request.send(null);
}

function processXML(text) {
    console.log(text);
}
