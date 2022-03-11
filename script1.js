// Bind Method
let name = {
    firstName : "Shubham",
    lastName : "Sharma"
}

let fullName = function () {
    document.getElementById( "bind" ).innerHTML = "• " + this.firstName + " " + this.lastName;
}

let getFullName = fullName.bind( name );
getFullName();


let gsw = {
    firstName : "Stephen",
    lastName : "Curry"
}

let fullGsw = function () {
    document.getElementById( "bind1" ).innerHTML = "• " + this.firstName + " " + this.lastName;
}

let getFullGsw = fullGsw.bind(gsw);
getFullGsw();