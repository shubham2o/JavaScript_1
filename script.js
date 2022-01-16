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


// JavaScript Array forEach()
const numbers1 = [45, 4, 9, 16, 25];
let num = "";
numbers1.forEach(myForEach);

function myForEach(value, index, array) {
    num += value + "<br>";
}

document.getElementById("forEach").innerHTML = num;


// JavaScript Array map()
document.getElementById("arrayMap").innerHTML = numbers1;
let num1 = "";
numbers1.map(myMap);

function myMap(value, index, array) {
    num1 += value * 2 + "<br>";
}

document.getElementById("map").innerHTML = num1;
document.getElementById("map1").innerHTML = typeof(numbers1.map(myMap));
document.getElementById("map2").innerHTML = Array.isArray(numbers1.map(myMap));

/* // OR we can write above as
let num1 = numbers1.map(myMap);

function myMap(value, index, array) {
    return value * 2 + "<br>";
}

document.getElementById("map").innerHTML = num1; */


// Array find()
const ages = [3, 10, 18, 20, 21, 5, 30, 35];
document.getElementById("find").innerHTML = ages;
document.getElementById("find1").innerHTML = ages.find(myFind);

function myFind(ages) {
    return ages > 18;
}


// Array findIndex()
document.getElementById("findIndex").innerHTML = ages;
document.getElementById("findIndex1").innerHTML = ages.findIndex(myFindIndex);

function myFindIndex(ages) {
    return ages > 18;
}