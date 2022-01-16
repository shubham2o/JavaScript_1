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


// Numeric Sort
const points = [40, 100, 1, 5, 25, 10];
const points1 = [40, 100, 1, 5, 25, 10];
document.getElementById("numericSort").innerHTML = points;

points.sort(function (a, b) {return a - b});
document.getElementById("ascendingOrder").innerHTML = points;

points1.sort(function (a, b) {return b - a});
document.getElementById("descendingOrder").innerHTML = points1;

function randomSort() {
    const points2 = [40, 100, 1, 5, 25, 10];
    points2.sort(function (a, b) {return 0.5 - Math.random()});
    document.getElementById("randomOrder").innerHTML = points2;
}