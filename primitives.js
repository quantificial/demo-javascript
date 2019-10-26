

// primitive type

/*
string
number
boolean
null
undefined
object
*/



var message = 'hello world';
console.log(message);

'use strict'; // no error message unless you use strict
message.length = 1;


// detect primitive 

var myString = 'hello world';
typeof myString;			// "string"
typeof 'hello world';		// "string"

var myNumber = 123;
typeof myNumber; 			// "number"
typeof 123; 				// "number"

var myBoolean = true;
typeof myBoolean; 			// "boolean"
typeof true; 				// "boolean"

var myUndefined = true;
typeof myUndefined;			// "undefined"
typeof undefined; 			// "undefined"

var myNull = true;
typeof myNull; 				// "object"
typeof null; 				// "object"

