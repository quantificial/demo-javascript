// call by value

// call by reference

// call by sharing




// => call by value ?
// the function cannot alter the target

var myString = 'hello world',
    myObj = { prop1: 123 };
function setAsLiteralobj(target) {
	target = {};
}
setAsLiteralobj(myString);
console.log(myString);					// 'hello world'
setAsLiteralobj(myObj);
console.log(myObj);						// { prop1: 123 }

// reason is... target is like a pointer to point to the memory


// object properties could be changed.

var myObj = { prop1: 123 };
function setAsLiteralobj(target) {
	target.prop1 = 456;
}
setAsLiteralobj(myObj);
console.log(myObj);						// { prop1: 456 }

