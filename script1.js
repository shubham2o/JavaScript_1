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

Function.prototype.bind1 = function( name, initials ) {
    let obj1 = this;
    return function( nationality ) {
        obj1.call( name, initials, nationality );
    }
}

let getFullName1 = fullName.bind1( name, "(SS)" );
getFullName1( "Indian" );

let getFullGsw1 = fullName.bind1( gsw, "(SC30)" );
getFullGsw1( "American" );


// Polyfill for Bind Method via Apply
console.log(`
3> <~~~ POLYFILL BIND METHOD via Apply ~~~>`);

Function.prototype.bind2 = function( ...args ) {
    let obj2 = this,
        params = args.slice(1);
    return function( ...args2 ) {
        obj2.apply( args[ 0 ], [ ...params, ...args2 ] );
    }
}

let getFullName2 = fullName.bind2( name, "(SS)" );
getFullName2( "Indian" );

let getFullGsw2 = fullName.bind2( gsw, "(SC30)" );
getFullGsw2( "American" );