// Bind Method
let name = {
    firstName : "Shubham",
    lastName : "Sharma"
}

let fullName = function( initials, nationality ) {
    document.getElementById( "bind" ).innerHTML = 
    "• " + this.firstName + " " + this.lastName + " " + initials + " " + nationality;
}

let getFullName = fullName.bind( name , "(SS)" );
getFullName( "Indian" );



// Polyfill for Bind Method via Call
Function.prototype.myBind = function( name, initials ) {
    let obj = this;
    return function( nationality ) {
        obj.call( name , initials, nationality );
    }
}

let fullName1 = function( initials, nationality ) {
    document.getElementById( "poly" ).innerHTML = 
    "• " + this.firstName + " " + this.lastName + " " + initials + " " + nationality;
}

let getFullName1 = fullName1.myBind( name , "(SS)" );
getFullName1( "Indian" );



// Bind Method
let gsw = {
    firstName : "Stephen",
    lastName : "Curry"
}

let fullGsw = function( initials, nationality ) {
    document.getElementById( "bind1" ).innerHTML = 
    "• " + this.firstName + " " + this.lastName + " " + initials + " " + nationality;
}

let getFullGsw = fullGsw.bind( gsw , "(SC30)" );
getFullGsw( "American" );



// Polyfill for Bind Method via Call
Function.prototype.myBind1 = function( gsw, initials ) {
    obj1 = this;
    return function( nationality ) {
        obj1.call( gsw, initials, nationality );
    }
}

let fullGsw1 = function( initials, nationality ) {
    document.getElementById( "poly1" ).innerHTML = 
    "• " + this.firstName + " " + this.lastName + " " + initials + " " + nationality;
}

let getFullGsw1 = fullGsw1.myBind1( gsw , "(SC30)" );
getFullGsw1( "American" );