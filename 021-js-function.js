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