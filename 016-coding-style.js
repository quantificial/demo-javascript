// bad 
var a = 5,
	b = 10;
console.log(a + b);

// good
var teaPrice = 5,
	sandWichPrice = 10;
console.log(teaPrice + sandWichPrice);

// camel casse

var lowerCamelCase;
function myFunction() {}

// js no private, use _ as private variable
var myObj = {
    prop: '',
    _privateProp: 'private'
  };
  function _myPrivatefunction() {
    // ...
  }

// const
const PI = 3.14;
var MAX_VALUE = 100;

// { } good 

function getBreakfast() {
    return {
      tea: 'tea',
      sandWich: 'sandWich'
    };
  }
  console.log(getBreakfast());		// {tea: "tea", sandWich: "sandWich"}

// always use strict

// need to declare variables

// restrict the variable scope
function myFn() {
    var onlyForMyFn = 'only for inner function';
    // do something to 'onlyForMyFn'
}
// other codes ...

// use IIFE and expose the required method

var myLibrary = (function() {
    var interface = {
          api1: api1,
          api2: api2,
          ...
        };
    function api1(name) {
        // ...
    }
    function api2(name) {
        // ...
    }
    // more codes ...
    return interface;
  })();


  // callback 
  // bad

  setTimeout(function() {
	wakeUp();
}, 100);

function wakeUp() {
  console.log('time to wakeup');
}

// good

setTimeout(wakeUp, 100);

function wakeUp() {
  console.log('time to wakeup');
}

// truthy & falsy
var value = "";
if ((value === undefined) || (value === '')) {
    // do something
    console.log("it is undefined");
}

if(!value) {
    console.log("it is undefined and empty");
}

// use ternay operator

function myFn(height, width) {
    height = (height > 200) ? 200 : height;
    width = (width > 200) ? 200 : width;
    // do something
  }

  function doSomething(isSleepy) {
    var decision = isSleepy ? drinkCoffee : startCoding;
    decision();
  }
  
  function drinkCoffee() {...} 
  function startCoding() {...} 

  // --

  function myFn(height, width) {
    if (!height) {
      height = 200;
    }
    if (!width) {
      width = 200;
    }
    // do something
  }

  function myFn(input) {
    height = height || 200;
    width = width || 200;
    // do something
  }

  var test;
  var test1 = test || "this is good";
  console.log(test1);

  