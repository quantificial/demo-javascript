// functions

function myFunction() {
  console.log("This is myFunction");
}

var a = myFunction,
  myObj = { fn: myFunction };
console.log(a); // f myFunction() { console.log('This is  myFunction'); }
console.log(myObj.fn); // f myFunction() { console.log('This is  myFunction'); }
a(); // "This is myFunction"
myObj.fn(); // "This is myFunction"

// add properties to function

function myFunction() {
  console.log("This is myFunction");
}
myFunction.prop1 = "This is prop1";
console.log(myFunction.prop1); // "This is prop1"
myFunction(); // "This is myFunction"

// --

function myFunction() {
  console.log("This is myFunction");
}
console.log(!myFunction); // false

// function => create function

function myFunction(callback) {
  console.log("This is myFunction"); // This is myFunction
  callback(); // This is myCallback
  function myInnerFunction() {
    console.log("This is myInnerFunction");
  }
  myInnerFunction(); // This is myInnerFunction
}

myFunction(function myCallback() {
  console.log("This is myCallback");
});

// function declaration

function myFunction() {
  console.log("Function declared with Function declaration");
}

// function expression

var myFunction = function NamedFunction() {
  console.log("Function declared with Function expression");
};
myFunction(); // "Function declared with Function expression"

var myFunction = function() {
  console.log("Function declared with Function expression");
};
myFunction(); // "Function declared with Function expression"

// with function constructor

var myFunction = new Function(
  "parameter1",
  "parameter2",
  "console.log('Function declared with Function Constructor')"
);
myFunction(); // Function declared with Function Constructor

var myFunction = function(parameter1, parameter2) {
  console.log("Function declared with Function expression");
};
myFunction(); // "Function declared with Function expression"

// - call function

// normal
myFunction();

// - use call and apply and  明確指定 this 的功能。

var myFunction = function(parameter1, parameter2) {
  console.log(parameter1, parameter2);
};
myFunction.call(null, "hello world", 123); // "hello world" 123
myFunction.apply(null, ["hello world", 123]); // "hello world" 123

// use new to call the function

function myFunction() {
  console.log("Function declared with Function expression");
  this.child = 10;
}
var a = new myFunction(); // "Function declared with Function expression"
console.log(a); // myFunction {}

console.log(a.child);

// self invoking function

(function() {
  // codes here
  console.log("aaa");
})();

var myString = (function() {
  return "This is IIFE";
})();
console.log(myString); // This is IIFE
