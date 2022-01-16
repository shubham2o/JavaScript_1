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