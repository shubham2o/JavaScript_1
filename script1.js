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


// Function Currying via Bind Method
console.log(`
4> <~~~ FUNCTION CURRYING via Bind Method ~~~>`);

let multiply = function( x, y ) {
    console.log("• " + x * y );
}

let multiplyBy2 = multiply.bind( this, 2 );
multiplyBy2( 7 );

let multiplyBy3 = multiply.bind( this, 3 );
multiplyBy3( 10 );

let multiplyBy4 = multiply.bind( this, 4, 12 );
multiplyBy4( 6 );

let multiplyBy5 = multiply.bind( this );
multiplyBy5( 5, 1 );


// Function Currying via Closures
console.log(`
5> <~~~ FUNCTION CURRYING via Closures ~~~>`);

let multiplyX = function( x ) {
    return function( y ) {
        console.log("• " + x * y);
    }
}

let multiplyBy02 = multiplyX( 2 );
multiplyBy02( 7 );

let multiplyBy03 = multiplyX( 3 );
multiplyBy03( 10 );

let multiplyBy04 = multiplyX( 4, 6 );
multiplyBy04( 12 );

let multiplyBy05 = multiplyX( );
multiplyBy05( 5, 1 );


// Debouncing via Button
let count = 0;
let button = document.getElementById( "debounce" );

function debounce( func, delay ) {
    let timer;
    return function() {
        clearTimeout( timer );
        let argume = arguments;
        timer = setTimeout( function() {
            func.apply( this, argume );
        }, delay );
    }
}

button.addEventListener( "click", debounce(function() {
    console.log( "Debounce... ", ++count )
}, 1200) );


// Debouncing via Input type text
let counter = 0;
const getData = () => {
    // calls an API and gets data
    console.log( "Fetching Data... ", ++counter );
}

const debounce1 = function( fn, dl ) {
    let time;
    return function() {
        clearTimeout( time );
        let context = this,
            argumen = arguments;
        time = setTimeout( () => {
            fn.apply( context, argumen );
        }, dl);
    }
}

const betterFunction = debounce1( getData, 400 );


// Event Delegation via Unordered List
document.querySelector( "#category" ).addEventListener( "click", (e) => {
    console.log( e.target.id );
    if ( e.target.tagName == "LI" ) {
        window.location.href = "/" + e.target.id;
    }
} );


// Event Delegation via Input type text
document.querySelector( "#form" ).addEventListener( "keyup", (e) => {
    console.log( e );
    if ( e.target.dataset.uppercase != undefined ) {
        e.target.value = e.target.value.toUpperCase();
    }
} )