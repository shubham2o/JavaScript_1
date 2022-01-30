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


// The Constructor Property
document.getElementById("myConstructor").innerHTML = 
"John".constructor + "<br>" +
(3.14).constructor + "<br>" +
false.constructor + "<br>" + 
[1, 2, 3, 4, 5].constructor + "<br>" + 
{name : "john", age : 34}.constructor + "<br>" +
new Date().constructor + "<br>" + 
function(){}.constructor;


// Arrow Function
var hello;
hello = () => "Hello World!";

document.getElementById("arrowFunc").innerHTML = hello();


// Using a Class
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

const myCar = new Car("Ford", 2014);

document.getElementById("myClass").innerHTML = 
myCar.name + " - " + myCar.year;

class Vehicle {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

const myVehicle = new Vehicle("Ford", 2014);

document.getElementById("myClass1").innerHTML = 
myVehicle.name + " - " + myVehicle.year + " - " + myVehicle.age() + " years old.";


// Property Getters and Setters
var person1 = {     // Create an object
    firstName : "John",
    lastName : "Doe",
    get fullName() {    // get
        return this.firstName + " " + this.lastName;
    }
};
document.getElementById("myGet").innerHTML = person1.fullName;  // Display

var person2 = {
    firstName : "John",
    lastName : "Doe",
    language : "NO",
    get lang() {    // get
        return this.language;
    },
    set lang(value) {   // set
        this.language = value;
    }
};
person2.lang = "English" // Set an object property using a setter 
document.getElementById("myGetSet").innerHTML = person2.lang;

var person3 = {
    firstName : "John",
    lastName : "Doe",
    language : "NO",
    set lang(value) {   // set
        this.language = value.toUpperCase();
    }
}
person3.lang = "english";
document.getElementById("mySet").innerHTML = person3.language;


// JavaScript Object Entries
const fruits4 = {
    Bananas : 300,
    Oranges : 200,
    Apples : 100
};
let text8 = "";
for (let [fruit, amount] of Object.entries(fruits4)) {
    text8 += fruit + " : " + amount + "<br>";
}
document.getElementById("objEntries").innerHTML = text8;

const person4 = {
    firstName : "John",
    lastName : "Doe",
    age : 50,
    eyeColor : "Blue"
};
document.getElementById("objEntries1").innerHTML = Object.entries(person4) instanceof Array;


// JavaScript Objects are Mutable
const person5 = {
    firstName : "John",
    lastName : "Doe",
    age : 50,
    eyeColor : "Blue"
};

const dob = person5;
dob.age = 30;

document.getElementById("objMutable").innerHTML = person5.age;
document.getElementById("objMutable1").innerHTML = dob.age;
document.getElementById("objMutable2").innerHTML = person5;
document.getElementById("objMutable3").innerHTML = dob;


// Nested Arrays and Objects
let text9 = "";

const myObj = {
    name : "John",
    age : 30,
    cars : [
        {
            name : "Ford",
            models : ["Fiesta", "Focus", "Mustang"]
        },
        {
            name : "BMW",
            models : ["320", "X3", "X5"]
        },
        {
            name : "Fiat",
            models : ["500", "Panda"]
        }
    ]
};

for (let i in myObj.cars) {
    text9 += "<h2><u>" + myObj.cars[i].name + "</u></h2>";
    for (let j in myObj.cars[i].models) {
        text9 += myObj.cars[i].models[j] + "<br>";
    }
}

document.getElementById("nested").innerHTML = text9;


// Stringify Functions
const person6 = {
    name : "John",
    age : function() {
        return 30;
    }
}
let myString = JSON.stringify(person6);
document.getElementById("stringify").innerHTML = myString;

const person7 = {
    name : "John",
    age : function () {
        return 30;
    }
}
person7.age = person7.age().toString();
let myString1 = JSON.stringify(person7);
document.getElementById("stringify1").innerHTML = myString1;


// JavaScript Object Constructors
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye
}

const myFather = new Person("John", "Doe", 50, "Blue");

document.getElementById("myConstructor1").innerHTML = myFather.age;


// Using the prototype property
function Person1 (first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
Person1.prototype.nationality = "English";

const myFather1 = new Person1("John", "Doe", 50, "Blue");

document.getElementById("myProto").innerHTML = myFather1.nationality;


// The entries() Method
const letters4 = new Set(["a", "b", "c"]);
const iterator = letters4.entries();

let text10 = "";
for (const entry of iterator) {
    text10 += entry + "<br>";
}

document.getElementById("myEntries").innerHTML = text10;


// Object as Keys
const fruits5 = new Map();

const apples2 = {
    name : "Apples"
};
const bananas2 = {
    name : "Bananas"
};
const oranges2 = {
    name : "Oranges"
};

fruits5.set(apples2, 500);
fruits5.set(bananas2, 300);
fruits5.set(oranges2, 200);

document.getElementById("myKey").innerHTML = fruits5.get(apples2);


// Changing a Property Values
const person8 = {
    firstName : "John",
    lastName : "Doe", 
    language : "EN"
};

document.getElementById("objDef").innerHTML = person8.language;
Object.defineProperty(person8, "language", {value : "NO"});

document.getElementById("objDef1").innerHTML = person8.language;


// Listing All Properties
const person9 = {
    firstName : "John",
    lastName : "Doe",
    language : "EN"
};

document.getElementById("getOwnPN").innerHTML = Object.getOwnPropertyNames(person9);

document.getElementById("getOwnPN1").innerHTML = Object.keys(person9);


// Listing enumerable properties
const person10 = {
    firstName : "John",
    lastName : "Doe",
    language : "EN"
};

Object.defineProperty(person10, "language", {enumerable: false});

document.getElementById("myEnum").innerHTML = Object.keys(person10);


// Adding a Property
const person11 = {
    firstName : "John",
    lastName : "Doe",
    language : "EN"
};

Object.defineProperty(person11, "year", {value : "2022"});

document.getElementById("objDef2").innerHTML = person11.year;


// Self Invoking Functions
(function () {
    document.getElementById("myInvoke").innerHTML = "Kitty, kitty, kitty!";
})();


// Function Hoisting
document.getElementById("myHoist").innerHTML = myFunction(5);

function myFunction(y) {
    return y * y;
}


// arguments.length
function myFunction() {
    return arguments.length;
}

document.getElementById("argLen").innerHTML = myFunction(0, 0, 0, 0);


// Create a function to find the highest value in a list of numbers.
function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

document.getElementById("findMax").innerHTML = findMax(7, 1, 30, 5, 20);


// JavaScript Function Call
const human = {
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
}

const human1 = {
    firstName : "John",
    lastName : "Doe"
};

const human2 = {
    firstName : "Mary",
    lastName : "Doe"
};

document.getElementById("funcCall").innerHTML = human.fullName.call(human1);


// The call() Method with arguments
const human3 = {
    fullName : function(city, country) {
        return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    }
}

const human4 = {
    firstName : "John",
    lastName : "Doe"
};

document.getElementById("funcCall1").innerHTML = human3.fullName.call(human4, "Oslo", "Norway");


// JavaScript Function Apply
const human5 = {
    fullName : function() {
        return this.firstName + " " + this.lastName;
    } 
}

const human6 = {
    firstName : "John",
    lastName : "Doe"
};

document.getElementById("funcApply").innerHTML = human5.fullName.apply(human6);


// The apply() Method with arguments
const human7 = {
    fullName : function(city, country) {
        return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    }
}

const human8 = {
    firstName : "John",
    lastName : "Doe"
};

document.getElementById("funcApply1").innerHTML = human7.fullName.apply(human8, ["Oslo", "Norway"]);


// JavaScript Closures
function myFunction() {         // Global Variables
    let a = 4;
    return a * a;
}
document.getElementById("myGlobal").innerHTML = myFunction();

let xyz = 5;
function myFunction1() {
    return xyz * xyz;
}
document.getElementById("myGlobal1").innerHTML = myFunction1();

function myFunction2() {
    axyz = 4;
}
myFunction2();
document.getElementById("myGlobal2").innerHTML = axyz * axyz;


// Class Inheritance
class Car1 {
    constructor(brand) {
        this.brand = brand;
    }
    present() {
        return "I have a " + this.brand;
    }
}

class Model1 extends Car1 {
    constructor(brand, mod) {
        super (brand);
        this.model = mod;
    }
    show() {
    return this.present() + ", it is a " + this.model + ".";
    }
}

let myCar1 = new Model1("Ford", "Mustang");

document.getElementById("myInh").innerHTML = myCar1.show();


// JavaScript Static methods
class Car2 {
    constructor(name) {
        this.name = name;
    }
    static hello() {
        return "H E L L O !"
    }
}
let myCar2 = new Car2("Ford");
document.getElementById("myStatic").innerHTML = Car2.hello();       // You can call "hello()" on the Car2 Class
// document.getElementById("myStatic1").innerHTML = myCar2.hello(); // But NOT on a Car2 Object i.e. myCar2

class Car3 {
    constructor(name) {
        this.name = name;
    }
    static hello(pqr) {
        return "G O O D B Y E ! " + pqr.name;
    }
}
let myCar3 = new Car3("Ford");
document.getElementById("myStatic2").innerHTML = Car3.hello(myCar3);


// JavaScript Callbacks
function myDisplayer(something) {       // Function Sequence
    document.getElementById("mySeq").innerHTML = something;
}

function myFirst() {
    myDisplayer("H e l l o");
}

function mySecond() {
    myDisplayer("G o o d B y e");
}

myFirst();
mySecond();


// Asynchronous functions
function myDisplayer1(something) {
    document.getElementById("myCallbacks").innerHTML = something;
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer1);


// SetTimeout()
setTimeout(function() {
    myFunction3("I am SHUBHAM");
}, 3000)

function myFunction3(value) {
    document.getElementById("setTmt").innerHTML = value;
}


// Waiting for Intervals
setInterval(myFunction4, 1000);

function myFunction4() {
    let d = new Date();
    document.getElementById("setInt").innerHTML = 
    d.getHours() + ":" + d.getMinutes()  + ":" + d.getSeconds();
}


// JavaScript Promise Object
function myDisplay(something) {
    document.getElementById("myPromise").innerHTML = something;
}

let myPromise = new Promise(function(resolve, reject) {
    let x = 0;
    // some code (try to change x to 5)
    if (x == 0) {
        resolve("O K");
    }
    else {
        reject("E R R O R");
    }
});

myPromise.then(
    function(value) {
        myDisplay(value);
    },
    function (error) {
        myDisplay(error);
    }
);


// Example using Promise
const myPromise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("I am S H U B H A M");
    }, 3000);
});

myPromise1.then(
    function(value) {
        document.getElementById("myPromise1").innerHTML = value;
    }
)


// Async / Await
async function myFunction5() {
    return "Hello";
}

/* Is the same as :
function myFunction5() {
    return Promise.resolve("Hello");
}*/

document.getElementById("myAsync").innerHTML = myFunction5();


// Here is how to use Promise
function myDisplay1(something) {
    document.getElementById("myAsync1").innerHTML = something; 
}

async function myFunction6() {
    return "H E L L O";
}

myFunction6().then(
    function(value) {
        myDisplay1(value);
    },
    function(error) {
        myDisplay1(error);
    }
)


// Await Syntax
async function myDisplay2() {
    let myPro = new Promise(function(resolve, reject) {
        resolve("I am S H U B H A M");
    });
    document.getElementById("myAwait").innerHTML = await myPro;
}

myDisplay2();


// Waiting for Timeout
async function myDisplay3() {
    let myPro1 = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("I am S H U B H A M - S H A R M A");
        }, 3000);
    });
    document.getElementById("myAwait1").innerHTML = await myPro1;
}

myDisplay3();


// Finding HTML Element by Tag Name
const element1 = document.getElementsByTagName("p");

document.getElementById("myTagName").innerHTML = 
"The text in the first paragraph (index 0) is : " + element1[0].innerHTML;


// This example finds the element with id = "myTagName1" and then finds all p elements inside "main" :
const element2 = document.getElementById("main1");
const element3 = element2.getElementsByTagName("p");

document.getElementById("myTagName1").innerHTML = 
"This first paragraph (index 0) inside 'main' is : " + element3[0].innerHTML;


// Child Nodes and Node Values
document.getElementById("id02").innerHTML = document.getElementById("id01").innerHTML;

document.getElementById("id04").innerHTML = document.getElementById("id03").firstChild.nodeValue;

document.getElementById("id06").innerHTML = document.getElementById("id05").childNodes[0].nodeValue;


/*// DOM Root Nodes
document.getElementById("id07").innerHTML = document.body.innerHTML;

document.getElementById("id08").innerHTML = document.documentElement.innerHTML;*/


// The nodeName Property
document.getElementById("id10").innerHTML = document.getElementById("id09").nodeName;


// The nodeType Property
document.getElementById("id12").innerHTML = document.getElementById("id11").nodeType;


// Creating New HTML ELements (Nodes)
const para1 = document.createElement("p");
const node1 = document.createTextNode("This is new.");
para1.appendChild(node1);

const para2 = document.getElementById("div1");
para2.appendChild(para1);


// Creating new HTML Elements - insertBefore()
const para3 = document.createElement("p");
const node2 = document.createTextNode("This is new.");
para3.appendChild(node2);

const para4 = document.getElementById("div2");
const child = document.getElementById("id15");
para4.insertBefore(para3, child);


// Removing existing HTML elements 
function myRemove() {
    document.getElementById("id17").remove();
}

function myRemove1() {
    const parent1 = document.getElementById("div3");
    const child1 = document.getElementById("id19");
    parent1.removeChild(child1);
}


// Replacing HTML Elements
function myReplace() {
    const parent2 = document.getElementById("div4");
    const child2 = document.getElementById("id21");
    const para5 = document.createElement("p");
    const node3 = document.createTextNode("This is new.");
    para5.appendChild(node3);
    parent2.replaceChild(para5, child2);
}


// The HTMLCollection Object
function myHTMLCol() {
    const myCollection = document.getElementsByTagName("p");
    document.getElementById("id23").innerHTML = myCollection[1].innerHTML;
}


// The HTMLCollection Length
function myLen() {
    const myCollection1 = document.getElementsByTagName("p");
    document.getElementById("id24").innerHTML = myCollection1.length;
}

function myLen1() {
    const myCollection2 = document.getElementsByTagName("p");
    for (let i = 0; i < myCollection2.length; i++) {
        myCollection2[i].style.color = "red";
    }
}


// Window Location Assign
function newDoc() {
    window.location.assign("https://www.w3schools.com");
}


// The checkValidity() Method
function myCheckValidity() {
    const inpObj = document.getElementById("id25");
    if (!inpObj.checkValidity()) {
        document.getElementById("id26").innerHTML = inpObj.validationMessage;
    }
    else {
        document.getElementById("id26").innerHTML = "INPUT OK";
    }
}


// The rangeOverflow Property
function myRangeOverflow() {
    let inpObj1;
    if (document.getElementById("id27").validity.rangeOverflow) {
        inpObj1 = "Value too large";
    }
    else if (!document.getElementById("id27").checkValidity()) {
        inpObj1 = document.getElementById("id27").validationMessage;
    }
    else {
        inpObj1 = "INPUT OK";
    }
    document.getElementById("id28").innerHTML = inpObj1;
}


// The rangeUnderflow Property
function myRangeUnderflow() {
    let myObj2;
    if (document.getElementById("id29").validity.rangeUnderflow) {
        myObj2 = "Value too low";
    }
    else if (!document.getElementById("id29").checkValidity()) {
        myObj2 = document.getElementById("id29").validationMessage;
    }
    else {
        myObj2 = "INPUT OK";
    }
    document.getElementById("id30").innerHTML = myObj2;
}


// The History back() Method
function myBack() {
    window.history.back();
}


// The History forward() Method
function myForward() {
    window.history.forward();
}


// The History go() Method
function myGo() {
    window.history.go(-2);
}


// The localStorage Object
localStorage.setItem("name", "John Doe");
document.getElementById("id31").innerHTML = localStorage.getItem("name");


// The sessionStorage Object
sessionStorage.setItem("name", "John Doe");
document.getElementById("id32").innerHTML = sessionStorage.getItem("name");


// JavaScript Fetch API
let file = "fetch_info.txt";
fetch (file)
.then(x => x.text())
.then(y => document.getElementById("id33").innerHTML = y)

getText("fetch_info.txt");
async function getText(file) {
    let x = await fetch(file);
    let y = await x.text();
    document.getElementById("id34").innerHTML = y;
}


// Using the Geolocation API
const loc = document.getElementById("id35");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        loc.innerHTML = "Geolocation is not supported by this browser";
    }
}

function showPosition(position) {
    loc.innerHTML = 
    "Latitude : " + position.coords.latitude + "<br> Longitude : " + position.coords.longitude;
}


// Handling Errors and Rejections
const loc1 = document.getElementById("id36");

function getLocation1() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition1, showError1);
    }
    else {
        loc1.innerHTML = "Geolocation is not supported in this browser.";
    }
}

function showPosition1(position1) {
    loc1.innerHTML = 
    "Latitude : " + position1.coords.latitude + "<br> Longitude : " + position1.coords.longitude;
}

function showError1(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED: 
            loc1.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            loc1.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            loc1.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            loc1.innerHTML = "An unknown error occurred."
            break;
    }
}


// Geolocation Object - Other interesting methods
const loc2 = document.getElementById("id37");

function getLocation2() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition2);
    }
    else {
        loc2.innerHTML = "Geolocation is not supported by this browser."
    }
}

function showPosition2(position2) {
    loc2.innerHTML = 
    "Latitude : " + position2.coords.latitude + "<br> Longitude : " + position2.coords.longitude;
}


// The XMLHttpRequest Object
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("div5").innerHTML = this.responseText;
    }
    xhttp.open("GET", "ajax_info.txt");
    xhttp.send();
}


// The onreadystatechange property
function loadDoc1() {
    const xhttp1 = new XMLHttpRequest();
    xhttp1.onreadystatechange = function() {
        document.getElementById("div6").innerHTML = this.responseText;
    }
    xhttp1.open("GET", "ajax_info.txt");
    xhttp1.send();
}


// GET Requests
function loadDoc2() {
    const xhttp2 = new XMLHttpRequest();
    xhttp2.onload = function () {
        document.getElementById("div7").innerHTML = this.responseText;
    }
    xhttp2.open("GET", "ajax_info.txt");
    xhttp2.send();
}

function loadDoc3() {
    const xhttp3 = new XMLHttpRequest();
    xhttp3.onload = function () {
        document.getElementById("div8").innerHTML = this.responseText;
    }
    xhttp3.open("GET", "ajax_info.txt?t=");
    xhttp3.send();
}

function loadDoc4() {
    const xhttp4 = new XMLHttpRequest();
    xhttp4.onload = function () {
        document.getElementById("div9").innerHTML = this.responseText;
    }
    xhttp4.open("GET", "ajax_info.txt?fname=Henry&lname=Ford");
    xhttp4.send();
}


// POST Request
function loadDoc5() {
    const xhttp5 = new XMLHttpRequest();
    xhttp5.onload = function () {
        document.getElementById("div10").innerHTML = this.responseText;
    }
    xhttp5.open("POST", "ajax_info.txt")
    xhttp5.send();
}


// The getAllResponseHeaders() Method
function myHeader() {
    const xhttp6 = new XMLHttpRequest();
    xhttp6.onload = function () {
        document.getElementById("id38").innerHTML = this.getAllResponseHeaders();
    }
    xhttp6.open("GET", "ajax_info.txt");
    xhttp6.send();
}


// The getResponseHeader() Method
function myHeader1 () {
    const xhttp7 = new XMLHttpRequest();
    xhttp7.onload = function () {
        document.getElementById("id39").innerHTML = this.getResponseHeader("Last-Modified");
    }
    xhttp7.open("GET", "ajax_info.txt");
    xhttp7.send();
}


// JSON Example
const myJSON = 
`{"employees" : [                                   <br>
    {"firstName" : "John", "lastName" : "Doe"},     <br>
    {"firstName" : "Anna", "lastName" : "Smith"},   <br>
    {"firstName" : "Peter", "lastName" : "Griffin"} <br>
]}`
document.getElementById("id40").innerHTML = myJSON;


// XML Example
const myXML = 
`<employees>
    <employee>
        <firstName>John</firstName><lastName>Doe</lastName>
    </employee>
    <employee>
        <firstName>Anna</firstName><lastName>Smith</lastName>
    </employee>
    <employee>
        <firstName>Peter</firstName><lastName>Griffin</lastName>
    </employee>
</employees>`
document.getElementById("id41").innerHTML = myXML;


// JSON.parse()
const myJSON1 = `'{"name" : "John", "age" : 30, "city" : "NewYork"}'`
document.getElementById("id42").innerHTML = myJSON1;

const myJSON2 = JSON.parse('{"name" : "John", "age" : 30, "city" : "NewYork"}');
document.getElementById("id43").innerHTML = myJSON2.name;


// Array as JSON
const myJson3 = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr1 = JSON.parse(myJson3);
document.getElementById("id44").innerHTML = myArr1[0];
document.getElementById("id45").innerHTML = myArr1 instanceof Array;


// Exceptions
const text01 = '{"name" : "John", "birth" : "1986-12-14", "city" : "NewYork"}';
const obj01 = JSON.parse(text01);
obj01.birth = new Date(obj01.birth);
document.getElementById("id46").innerHTML = obj01.name + ", " + obj01.birth;

const text02 = '{"name" : "John", "birth" : "1986-12-14", "city" : "NewYork"}';
const obj02 = JSON.parse(text02, function (key, value) {
    if (key == "birth") {
        return new Date (value);
    }
    else {
        return value;
    }
});
document.getElementById("id47").innerHTML = obj02.name + ", " + obj02.birth;

const text03 = '{"name" : "John", "age" : "function() {return 30;}", "city" : "NewYork"}';
const obj03 = JSON.parse(text03);
obj03.age = eval("(" + obj03.age + ")");
document.getElementById("id48").innerHTML = obj03.name + ", " + obj03.age();


// JSON.stringify()
const obj04 = {name : "John", age : 30, city : "NewYork"}; 
const myJSON04 = JSON.stringify(obj04);

document.getElementById("id49").innerHTML = myJSON04;


// Stringify a JavaScript Array
const arr01 = ["John", "Peter", "Sally", "Jane"];
const myJSON05 = JSON.stringify(arr01);

document.getElementById("id50").innerHTML = typeof arr01 + " => " + arr01;
document.getElementById("id51").innerHTML = typeof myJSON05 + " => " + myJSON05;


// Storing Data
const obj05 = {name : "John", age : 31, city : "NewYork"};
const myJSON06 = JSON.stringify(obj05);
localStorage.setItem("testJSON", myJSON06);

let text04 = localStorage.getItem("testJSON");  // Retrieving Data
let obj06 = JSON.parse(text04);
document.getElementById("id52").innerHTML = obj06.name;


// Exceptions
const obj07 = {name : "John", today : new Date(), city : "NewYork"}; 
const myJSON07 = JSON.stringify(obj07);
document.getElementById("id53").innerHTML = myJSON07;

const obj08 = {name : "John", age : function() {return 30;}, city : "NewYork"}; 
obj08.age = obj08.age.toString();
const myJSON08 = JSON.stringify(obj08);
document.getElementById("id54").innerHTML = myJSON08;


// A proper random function
function getRndInteger(min, max) {
    let rndInt = 
    Math.floor(Math.random() * (max - min)) + min;
    document.getElementById("id55").innerHTML = rndInt;
}

function getRndInteger1(min, max) {
    let rndInt1 = 
    Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("id56").innerHTML = rndInt1;
}


// 1. Reverse a string With Built-In Functions
function myReverse(str) {
    // let strToArray = str.split("");
    // let strToReverse = strToArray.reverse();
    // let strToJoin = strToReverse.join("");
    // return strToJoin;
    return str
            .split("")
            .reverse()
            .join("");
}


// 2. Reverse a String With a Decrementing For Loop
function myReverse1(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}


// 3. Reverse a String With Recursion
function myReverse2(str) {
    if (str === "") {
        return "";
    }
    else {
        return myReverse2(str.substr(1)) + str.charAt(0);
    }
}


// Write a program to reverse a given integer number
function reverseInt(num) {
    // let num2Str = num.toString();
    // let num2Arr = num2Str.split(""); 
    // let num2Reverse = num2Arr.reverse();
    // let num2Join = num2Reverse.join("");
    // return parseFloat(num2Join) * Math.sign(num);
    return parseFloat(num
            .toString()
            .split("")
            .reverse()
            .join("")
    ) * Math.sign(num)
}


// Write a function which can convert the time input given in 12 hours format to 24 hours format
const date01 = new Date();
const hours01 = date01.getHours();
const minutes01 = date01.getMinutes();
const time = hours01 +":"+ minutes01;

function convertTo24HrsFormat(time) {
    let [hour, modifier] = time.split(":");
    let min01 = parseInt(modifier).toString().padStart(2, "0");
    let index01 = modifier.toLowerCase().indexOf("m");
    let meridian = modifier.slice(index01 - 1);
    hour = parseInt(hour);

    if(hour === 12) {
        hour = 00;
    }
    if(meridian == "PM") {
        hour = hour + 12;
    }

    hour = hour.toString().padStart(2, "0");

    let time24hr = `${hour}:${min01}`;
    document.getElementById("id61").innerHTML = time24hr;
}


/* Write a function which accepts a string argument and returns the count of characters between 
the first and last character "X". */
const str01 = "XeroX";

function getTheGap(str01) {
    let firstIndex = str01.indexOf("X");
    let lastIndex = str01.lastIndexOf("X");
    let gap = lastIndex - firstIndex;

    if (str01.includes("X")) {
        document.getElementById("id62").innerHTML = gap;
    }
    else {
        document.getElementById("id62").innerHTML = -1;
    }
}


// Write a function to truncate a string to a certain number of words
const myString01 = "Hello, my name is Shubham Sharma and I am a full stack developer"; 
const worldLimit = 5;

function myTruncate(myString01, worldLimit) {
    let toArray = myString01.split(" ");
    let mySlice = toArray.slice(0, worldLimit);
    let toString = mySlice.toString();
    let myReplace = toString.replace(/,/gi, " ");
    
    document.getElementById("id63").innerHTML = myReplace;
}


// Fibonacci series in JavaScript
const numbers01 = 8;

function fibonacci(numbers01) {
    let myArr = [];
    if (numbers01 === 0) {
        myArr = [0];
    }
    else if (numbers01 === 1) {
        myArr = [0, 1];
    }
    else {
        myArr = [0, 1];
        for (let i = 2; i < numbers01; i++) {
            myArr.push(myArr[myArr.length - 2] + myArr[myArr.length - 1]);
        } 
    }
    document.getElementById("id64").innerHTML = myArr;
}


// Leap Year Challenge
const checkYear = new Date().getFullYear();

function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                document.getElementById("id65").innerHTML = year + " - Leap year.";
            }
            else {
                document.getElementById("id65").innerHTML = year + " - Not a leap year.";
            }
        }
        else {
            document.getElementById("id65").innerHTML = year + " - Leap year.";
        }
    }
    else {
        document.getElementById("id65").innerHTML = year + " - Not a leap year.";
    }
}


// HTML DOM innerText Property
function myInnerText() {
    var inTxt = document.getElementById("myBtn").innerText;
    document.getElementById("id66").innerHTML = inTxt;
}


// HTML DOM innerHTML Property
function myInnerHTML() {
    alert(document.getElementById("id67").innerHTML);
}

function myInnerHTML1() {
    document.getElementById("id68").innerHTML = "";
}

function myInnerHTML2() {
    document.getElementById("id69").innerHTML = "W3Schools";
    document.getElementById("id69").href = "https://www.w3schools.com/";
    document.getElementById("id69").target = "_blank"; 
}


// HTML DOM outerText Property
function myOuterText() {
    var outText = document.getElementsByTagName("h4")[0];
    outText.outerText = "<h4>Changed content1</h4>";
}


// HTML DOM outerHTML Property
function myOuterHTML() {
    var outHTML = document.getElementsByTagName("h4")[1];
    outHTML.outerHTML = "<h2>‣ You changed the entire header element and it's content!</h2>";
}

function myOuterHTML1() {
    var outHTML = document.getElementsByTagName("h4")[2];
    alert(outHTML.outerHTML);
}


// Style cssText Property
function cssText() {
    document.getElementById("id70").style.cssText = 
    "background-color : pink; font-size : 30px; border : 2px dashed green; color : white;" 
}

function cssText1() {
    alert(document.getElementById("id71").style.cssText);
}


// HTML DOM Document getElementsByName()
function elName() {
    let collection = document.getElementsByName("fname");
    document.getElementById("id72").innerHTML = collection[0].tagName;
}

function elName1() {
    const collection1 = document.getElementsByName("animal");
    for (let i = 0; i < collection1.length; i++) {
        if (collection1[0].type == "checkbox") {
            collection1[i].checked = true;
        }
    }
}


// The HTMLCollection Object
function htmlCol() {
    var htmlCol = document.getElementsByTagName("span");
    document.getElementById("id73").innerHTML = htmlCol;
}

function htmlCol1() {
    var htmlCol1 = document.getElementsByTagName("span").length;
    document.getElementById("id74").innerHTML = htmlCol1;
}

function htmlCol2() {
    var a1, b1, c1;
    a1 = document.getElementsByTagName("*");
    c1 = a1.length;
    for (b1 = 0; b1 < c1; b1++) {
        document.getElementById("id75").innerHTML = a1[b1].tagName + "<br>";
    }
}


// Input Text value Property
function myValue() {
    document.getElementById("id76").value = "JOHNNY BRAVO";
}


// HTML DOM Element attributes
function myAttributes() {
    let num01 = document.getElementById("flowerImg").attributes.length;
    document.getElementById("id77").innerHTML = num01;
}

function myAttributes1() {
    const nodeMap = document.getElementById("flowerImg1").attributes;
    let txt01 = "";
    for (let i = 0; i < nodeMap.length; i++) {
        txt01 += nodeMap[i].name + " : " + nodeMap[i].value + "<br>";
    }
    document.getElementById("id78").innerHTML = txt01;
}

function myAttributes2() {
    let txt02 = document.getElementById("Btn01").attributes[1].name;
    let txt03 = document.getElementById("Btn01").attributes[1].value;
    
    document.getElementById("id79").innerHTML = txt02 + " : " + txt03;
}