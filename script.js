// JavaScript Strings as Objects
// x is a string
let x = "John";

// y is an object
let y = new String("John");

document.getElementById("myString").innerHTML = 
typeof x + "<br>" + typeof y;


// Replace Method
function myReplace() {
    let text = document.getElementById("myReplace").innerHTML;
    document.getElementById("myReplace").innerHTML = text.replace(/MIcRoSoFt/i, "W3Schools");
}

function undoReplace() {
    let text = document.getElementById("myReplace").innerHTML;
    document.getElementById("myReplace").innerHTML = text.replace(/W3sChOoLs/i, "Microsoft");
}


// Split() Method
let text = "a, b, c, d, e";
const myArray = text.split(",");
document.getElementById("mySplit").innerHTML = 
myArray[0] + "<br>" + myArray[1] + "<br>" + myArray[2] + "<br>" + myArray[3] + "<br>" + myArray[4];


// HTML Templates
let header = "Template Literals";
let tags = ["Template Literals", "Javascript", "ES6"];

let html = `<h2>${header}</h2><ul>`;
for (const i of tags) {
    html += `<li>${i}</li>`;
}

html += `</ul>`;
document.getElementById("myTemplates").innerHTML = html;


// Converting Arrays to Strings
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("myArray").innerHTML = fruits.toString();
document.getElementById("myString1").innerHTML = typeof (fruits.toString());