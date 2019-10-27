// function invocation


// function expression
var canada = () => {
    console.log('cold');
}

// function declaration
function india() {
    console.log('warm')
}

// Function Invocation/Call/Execution

canada();
india();

function marry(person1, person2) {
    console.log(arguments); 
    return `${person1} is now married to ${person2}`;
}

marry('Tim','Tina');

// create array from argument
function marry(person1, person2) {
    console.log(Array.from(arguments)); 
    return `${person1} is now married to ${person2}`;
}

marry('Tim','Tina');

// use array from ...

// create array from argument
function marry(...args) {
    console.log(Array.from(arguments)); 
    return `${args[0]} is now married to ${args[1]}`;
}

marry('Tim','Tina');


// execution context

function two() {
    var isValid; // undefined
}

function one() {
    var isValid = true; // local env
    two(); // new execution context
}

var isValid = false;
one();

// two() => undefined
// one() => true
// global() => false
// [CALLSTACK] 

// -------------------------------------------

// scope chain => every function has a connection to global context
// and it's parent context

// chain...
function sayMyName() {
    var a = 'a'
    return function findName() {
        var b ='b'
        return function printName() {
            var c ='c'
            console.log(a) // <- can access the scope chain...
            return 'yeah'
        }
    }
}

console.log(sayMyName()()());

// -------------------------------------------
// each function scope, contains the [[Scopes]]
// 


// ------------------------------------
// weird behaviour that the variable become global

function weird() {
    height = 10; // no var, no const => become global variable
    return height;
}

height=20;
console.log(weird()); // 10
console.log(height); // 10

// js weird...

var heyhey = function doodle() {
    return 'heyhey';
}
heyhey();


function a() {
    value=10;
    return function b() {
        console.log(value);
    }
}
var c = a();
value = 20;
c();




