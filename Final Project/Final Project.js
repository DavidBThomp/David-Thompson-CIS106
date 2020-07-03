const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const jsdom = require("jsdom");

main();

function main() {
    let text = requestPage();
    console.log(text);
    
    
    getTags(text);
}

function requestPage() {
    let request = new XMLHttpRequest();
    let url = "https://www.w3schools.com/xml/simple.xml";
    request.open("GET", url, false);
    request.send(null);
    return request.responseText;
}

function getTags(text) {
    const dom = new jsdom.JSDOM(text);
    console.log(dom.window.document.querySelectorAll('name').textContent);
    //Queryselectorall, but queryselector works fine? Is it incorrect use of the property or just another error?
}
