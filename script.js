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


// JavaScript Boolean as Objects
// boolX is a boolean
let boolX = false;

// boolY is an object
let boolY = new Boolean(false);

document.getElementById("boolean").innerHTML = typeof boolX + "<br>" + typeof boolY;


// JavaScript For In Loop ~ Over Objects
const person = {
    fname : "John",
    lname : "Doe",
    age : 25
};

let abc = "";
for(let x in person) {
    abc += person[x] + "<br>"; 
}

document.getElementById("forInObjects").innerHTML = abc;


// Javascript For In Loop ~ Over Arrays
const numbers2 = [45, 4, 9, 16, 25];
let def = "";

for (const x in numbers2) {
    def += numbers2[x] + "<br>";
}

document.getElementById("forInArrays").innerHTML = def;


// Javascript For Of Loop
const cars = ["BMW", "Volvo", "Mini"];
let ghi = "";

for (const x of cars) {
    ghi += x + "<br>";
}

document.getElementById("forOf").innerHTML = ghi;


// Javascript While Loop
let text1 = "";

let jkl = 0;
while (jkl < 10) {
    text1 += jkl + "<br>";
    jkl++;
}

document.getElementById("whileLoop").innerHTML = text1;


// Javascript Do While Loop
let text2 = "";

let mno = 0;
do {
    text2 += mno + "<br>";
    mno++;
}
while (mno < 10);

document.getElementById("doWhile").innerHTML = text2;


// The Break Statement
let text3 = "";

for (let i = 0; i < 10; i++) {
    if (i === 3) {
        break;
    }
    text3 += i + "<br>";
}

document.getElementById("breakSt").innerHTML = text3;


// The Continue Statement
let text4 = "";

for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue;
    }
    text4 += i + "<br>";
}

document.getElementById("continueSt").innerHTML = text4;


// JavaScript Labels
const cars1 = ["BMW", "Volvo", "Saab", "Ford"];
let text5 = "";

list : {
    text5 += cars[0] + "<br>";
    text5 += cars[1] + "<br>";
    break list;
    text5 += cars[2] + "<br>";
    text5 += cars[3] + "<br>";
}

document.getElementById("jsLabel").innerHTML = text5;


// Javascript Sets
const letters = new Set(["a", "b", "c"]);   // Create a Set
document.getElementById("sets").innerHTML = letters.size;   // Display set size

const letters1 = new Set();     // Create a set and add values:
letters1.add("a");   // Add values
letters1.add("b");
letters1.add("c");
document.getElementById("addValues").innerHTML = letters1.size;

const letters2 = new Set();     // Create a set and add values to the variables:
const a = "a";   // Create variables
const b = "b";
const c = "c";
letters2.add(a);    // Add the values to the set
letters2.add(b);
letters2.add(c);
document.getElementById("addValues1").innerHTML = letters2.size;

const letters3 = new Set(["a", "b", "c"]);   // The values() Method
let text6 = "";    // List all elements
for (const x of letters3.values()) {
    text6 += x + "<br>";
}
document.getElementById("valuesMethod").innerHTML = text6;


// JavaScript Maps
const fruits1 = new Map([   // Create a Map
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
document.getElementById("maps").innerHTML = fruits1.get("apples");

const fruits2 = new Map();
fruits2.set("apples", 500);   // Set Map values
fruits2.set("bananas", 300);
fruits2.set("oranges", 200);
document.getElementById("mapSet").innerHTML = fruits2.get("apples");

document.getElementById("mapDelete").innerHTML = fruits2.size;
document.getElementById("mapDelete1").innerHTML = fruits2.get("apples");
fruits2.delete("apples");   // The delete() method
document.getElementById("mapDelete2").innerHTML = fruits2.size;
document.getElementById("mapDelete3").innerHTML = fruits2.get("apples");

const fruits3 = new Map([   // The entries() method
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
let text7 = "";
for(const x of fruits3.entries()) {
    text7 += x + "<br>";
}
document.getElementById("mapEntries").innerHTML = text7;