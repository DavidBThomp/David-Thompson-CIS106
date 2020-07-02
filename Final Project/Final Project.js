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

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

main();

function main() {
    let text = requestPage();
    console.log(text);
}

function requestPage() {
    let request = new XMLHttpRequest();
    let url = "https://www.w3schools.com/xml/simple.xml";
    request.open("GET", url, false);
    request.send(null);
    return request.responseText;
}
