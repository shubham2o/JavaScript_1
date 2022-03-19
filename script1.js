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
console.log(`
6> <~~~ Debouncing via Button ~~~>`);
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
    console.count( "Debounce... ")
}, 1200) );


// Debouncing via Input type text
console.log(`
7> <~~~ Debouncing via Input type text ~~~>`);
const getData = () => {
    // calls an API and gets data
    console.count( "Fetching Data... " );
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
console.log(`
8> <~~~ Event Delegation via Unordered List ~~~>`);
document.querySelector( "#category" ).addEventListener( "click", (e) => {
    console.log( e.target.id );
    if ( e.target.tagName == "LI" ) {
        window.location.href = "/" + e.target.id;
    }
} );


// Event Delegation via Input type text
console.log(`
9> <~~~ Event Delegation via Input type text ~~~>`);
document.querySelector( "#form" ).addEventListener( "keyup", (e) => {
    console.log( e );
    if ( e.target.dataset.uppercase != undefined ) {
        e.target.value = e.target.value.toUpperCase();
    }
} )


// Throttling via Window Resize
console.log(`
10> <~~~ Throttling via Window Resize ~~~>`);
const loggerFunc = () => {
    console.count( "********** THROTTLED FUNCTION **********" );
}

const throttle = ( fn, limit ) => {
    let flag = true;
    return function () {
        let context = this;
        let args = arguments;
        if ( flag ) {
            fn.apply( context, args );
            flag = false;
            setTimeout( () => {
                flag = true;
            }, limit );
        }
    }
}

const betterLoggerFunction = throttle( loggerFunc, 1500 );

window.addEventListener( "resize", betterLoggerFunction );


// This is the normal function without throttling
console.log(`
11> <~~~ This is the normal function without throttling ~~~>`);
const normalFunc = () => {
    console.count( "normal function" );
}

window.addEventListener( "resize", normalFunc );


// Throttling via Button
console.log(`
12> <~~~ Throttling via Button ~~~>`)
let throttling = document.getElementById( "throttleBtn" );

function throttlingBtn( func, delay ) {
    let prev = 0;
    return function( ...args ) {
        let now = new Date().getTime();
        if ( now - prev > delay ) {
            prev = now;
            return func( ...args );
        }
    }
}

throttling.addEventListener( "click", throttlingBtn( function() {
    console.count( "******* THROTTLING *******" );
}, 2000 ) )


/* Higher Order Functions ( H.O.F )
EXAMPLE 1
The function y below which takes x function as an argument is the H.O.F and
x function below is the callback function */
console.log(`
13> <~~~ H.O.F EXAMPLE 1 ~~~>`)
function x() {
    console.log( "Namaste JavaScript" );
}

function y( x ) { 
    x();
}


/* EXAMPLE 2
PROBLEMS that will occur from the execution of the below code are as follows :-
1. Repetitive - DRY ( Don't Repeat Yourself )
2. Code Reuseability
console.log(`
14> <~~~ H.O.F EXAMPLE 2 ~~~>`);
const radius = [ 3, 1, 2, 4 ];

const calculateArea = function ( radius ) {
    const output = [];
    for ( let i = 0; i < radius.length; i++ ) {
        output.push( Math.PI * radius[ i ]  * radius[ i ] );
    }
    return output;
};

console.log( calculateArea( radius ) );

const calculateCircumference = function( radius ) {
    const output = [];
    for ( let i = 0; i < radius.length; i++ ) {
        output.push( 2 *  Math.PI * radius[ i ] );
    }
    return output;
};

console.log( calculateCircumference( radius ) );

const calculateDiameter = function( radius ) {
    const output = [];
    for ( let i = 0; i < radius.length; i++ ) {
        output.push( 2 * radius[ i ] );
    }
    return output;
};

console.log( calculateDiameter( radius ) ); */

console.log(`
14> <~~~ H.O.F EXAMPLE 2 ~~~>`);
const radius = [ 3, 1, 2, 4 ];

const area = function( radius ) {
    return Math.PI * radius * radius;
};
const circumference = function( radius ) {
    return 2 * Math.PI * radius;
};
const diameter = function( radius ) {
    return 2 * radius;
};

const calculate = function ( arr, logic ) {
    const output = [];
    for( let i = 0; i < arr.length; i++ ) {
        output.push( logic( arr[ i ] ) );
    }
    return output;
}

console.log( calculate( radius, area ) );
console.log( calculate( radius, circumference ) );
console.log( calculate( radius, diameter ) );


/* MAP FUNCTION
The calculate function above is exactly similar to the function map */
console.log(`
15> <~~~ MAP FUNCTION ~~~>`);
console.log( radius.map( area ) );
console.log( radius.map( circumference ) );
console.log( radius.map( diameter ) );


// POLYFILL FOR MAP FUNCTION
console.log(`
16> <~~~ POLYFILL FOR MAP FUNCTION ~~~>`);
Array.prototype.calculate1 = function ( logic ) {
    const output = [];
    for( let i = 0; i < this.length; i++ ) {
        output.push( logic( this[ i ] ) );
    }
    return output;
};

console.log( radius.calculate1( area ) );
console.log( radius.calculate1( circumference ) );
console.log( radius.calculate1( diameter ) );


// MAP Function 
console.log(`
17> <~~~ MAP FUNCTION ~~~>`);
const arr = [ 5, 1, 3, 2, 6 ];

function double( x ) {
    return x * 2;
}
const result = arr.map( double );
console.log( result );


function triple( x ) {
    return x * 3;
}
const result1 = arr.map( triple );
console.log( result1 );


function binary( x ) {
    return x.toString( 2 );
}
const result2 = arr.map( binary );
console.log( result2 );


// FILTER Function 
console.log(`
18> <~~~ FILTER FUNCTION ~~~>`);

function isOdd( x ) {
    return x % 2;
}
const outcome = arr.filter( isOdd );
console.log( outcome );


function isEven( x ) {
    return x % 2 === 0;
}
const outcome1 = arr.filter( isEven );
console.log( outcome1 );


function greaterThan4( x ) {
    return x > 4;
}
const outcome2 = arr.filter( greaterThan4 );
console.log( outcome2 );

/* Above code in Arrow Function
const outcome2 = arr.filter( ( x ) =>  x > 4 );
console.log( outcome2 ); */


// REDUCE Function
console.log(`
19> <~~~ REDUCE FUNCTION ~~~>`);

// Non-conventional way to find the sum of array.
function findSum( arr ) {
    let sum = 0;
    for( let i = 0; i < arr.length; i++ ) {
        sum = sum + arr[ i ];
    }
    return sum;
}
const answer = findSum( arr );
console.log( answer );

// Conventional way to find the sum of array.
const sum = arr.reduce( function( acc, curr ) {
    acc = acc + curr;
    return acc;
}, 0 );
console.log( sum );

// Non-conventional way to find the max from an array.
function findMax( arr ) {
    let max = 0;
    for( let i = 0; i < arr.length; i++ ) {
        if( arr[ i ] > max ) {
            max = arr[ i ];
        }
    }
    return max;
}
const answer1 = findMax( arr );
console.log( answer1 );

// Conventional way to find the max from an array.
const max = arr.reduce( function( max, curr) {
    if( curr > max ) {
        max = curr;
    }
    return max;
}, 0 );
console.log( max );