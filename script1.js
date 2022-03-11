let name = {
    firstName : "Shubham",
    lastName : "Sharma"
}

let gsw = {
    firstName : "Stephen",
    lastName : "Curry"
}

let fullName = function( initials, nationality ) {
    console.log( 
        "• " + this.firstName + " " + this.lastName + " " + initials + " " + nationality
    );
}


// Bind Method
console.log(`1> <~~~ NORMAL BIND METHOD ~~~>`);

let getFullName = fullName.bind( name, "(SS)" );
getFullName( "Indian" );

let getFullGsw = fullName.bind( gsw, "(SC30)" );
getFullGsw( "American" );


// Polyfill for Bind Method via Call
console.log(`
2> <~~~ POLYFILL BIND METHOD via Call ~~~>`);

Function.prototype.bind = function( name, initials ) {
    let obj = this;
    return function( nationality ) {
        obj.call( name, initials, nationality );
    }
}

let getFullName1 = fullName.bind( name, "(SS)" );
getFullName1( "Indian" );

let getFullGsw1 = fullName.bind( gsw, "(SC30)" );
getFullGsw1( "American" );


// Polyfill for Bind Method via Apply
console.log(`
3> <~~~ POLYFILL BIND METHOD via Apply ~~~>`);

Function.prototype.mybind = function( ...args ) {
    let obj1 = this,
        params = args.slice(1);
    return function( ...args2 ) {
        obj1.apply( args[ 0 ], [ ...params, ...args2 ] );
    }
}

let getFullName2 = fullName.mybind( name, "(SS)" );
getFullName2( "Indian" );

let getFullGsw2 = fullName.mybind( gsw, "(SC30)" );
getFullGsw2( "American" );