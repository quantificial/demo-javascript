// build in objects

/*
String
Number
Boolean
Object
Function
Array
Date
RegExp
Error
*/


var myStringObj = new String('hello world');
console.log(myStringObj);				// String {"hello world"}

var myNumberObj = new Number(123);
console.log(myNumberObj);				// Number {123}

var myBooleanObj = new Boolean(true);	// Boolean {true}
console.log(myBooleanObj);

var myObject = new Object();
console.log(myObject);				    // {}

var myArray = new Array();
console.log(myArray);					// []

var myDate = new Date();
console.log(myDate);					// Wed Dec 22 2017 21:47:10 GMT+0800


// create from literals
// for Object、Array、Function、RegExp

var myLiteralObject = {};
console.log(myLiteralObject);			// {}
console.log(typeof myLiteralObject);			// {}

var myLiteralArray = [];
console.log(myLiteralArray);			// []
console.log(typeof myLiteralArray);			// []

// Object.prototype.toString.call()
// check child type

Object.prototype.toString.call(myStringObj); 		// "[object String]"
Object.prototype.toString.call(myNumberObj); 		// "[object Number]"
Object.prototype.toString.call(myBooleanObj); 		// "[object Boolean]"
Object.prototype.toString.call(myArray); 			// "[object Array]"


// instanceOf
// check child type is..

myStringObj instanceOf String; 		// "true"
myStringObj instanceOf Number; 		// "false"

myObject instanceOf Object			// "true"
myLiteralObject instanceOf Object		// "true"

myArray instanceOf Array			    // "true"
myLiteralArray instanceOf Array		// "true"


// get value

myStringObj.valueOf();		// "hello world"
myNumberObj.valueOf();		// 123
myBooleanObj.valueOf();		// true
myArray.valueOf();		    // []


// write properties to object
'use strict';

// test read property
myStringObj.length;					// 11

// test write property
myStringObj.myProperty = 'testWrite';
myStringObj.myProperty;				// "testWrite"


// literals

'hello world';		// string literal
true;				// boolean literal
123;				// number literal
123.4;				// float number literal
null				// null literal
{};					// object literal
[];					// array literal
/ab+c/;				// regExp literal



