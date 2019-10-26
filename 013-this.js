// 在非嚴格模式下，this 的內容就會是 global 物件
// 在嚴格模式下，this 的內容就會是 undefined

myString = 'hello global';
function logMyString() {
  var myString = 'hello local';
  console.log(this.myString);
}
logMyString.myString = 'hello function';
logMyString();						// "hello global"

// ------------------------

'use strict';
var myString = 'hello global';
function logMyString() {
  console.log(this);				// undefined
  console.log(this.myString);		// Uncaught TypeError: Cannot read property 'myString' of undefined
}
logMyString.myString = 'hello function';
logMyString();

// 當 this 是非嚴格模式下的預設繫結時是能夠修改 global 物件內容的，
// 再加上使用 this 很有可能就不小心套用到預設繫結，
// 為了不汙染 global Scope，在操作 this 的狀況下，保持使用嚴格模式是很重要的！

var myString = 'hello global';
var innerObj = { log: logMyString, myString: 'hello inner object' };
var obj = { log: logMyString, myString: 'hello object', innerObj: innerObj };

function logMyString() {
  console.log(this.myString);
}
logMyString.myString = 'hello function';

logMyString();						// "hello global"
obj.log();							// "hello object"
obj.innerObj.log();					// "hello inner object"
var logMyString2 = obj.log;
logMyString2();						// "hello global"


// ----

var myString = 'hello global',
	obj = { myString: 'hello object' };
function logMyString() {
  console.log(this.myString);
}
logMyString.myString = 'hello function';

logMyString();							// "hello global"
logMyString.call(obj);					// "hello Object"
logMyString.apply(obj);					// "hello Object"

logMyString.call(null);					// "hello global"
logMyString.apply(null);				// "hello global"


// ----

var myString = 'hello global',
	obj1 = { myString: 'hello object1' },
    obj2 = { myString: 'hello object2' };
function logMyString() {
  console.log(this.myString);
}
logMyString.myString = 'hello function';

var bindedFn = logMyString.bind(obj1);
bindedFn();										// "hello object1"

bindedFn.call(obj2);							// "hello object1"

obj2.log = bindedFn;
obj2.log();										// "hello object1"

// ----

var myString = 'hello global';
function logMyString() {
  this.myString = 'hello new object';
}
logMyString.myString = 'hello function';
var newObj = new logMyString();
console.log(newObj.myString);					// "hello new object"

// -----

// 就是因為箭號函式的 this 會被繫結到包裹他的 Function 的 this

var myString = 'hello global',
    obj = {};
function outer() {
  this.myString = 'hello outer';
  return () => {
  	this.myString = 'hello arrow function';
  }
}

var arrowFn = outer.call(obj);
console.log(obj.myString);				// "hello outer"
arrowFn();
console.log(window.myString);			// "hello global"
console.log(obj.myString);				// "hello arrow function"

// ----
var myString = 'hello global',
    obj = {};
function outer() {
  var self = this;
  self.myString = 'hello outer';
  return function() {
  	self.myString = 'hello anonymous function';
  }
}

var anonymousFn = outer.call(obj);
console.log(obj.myString);				// "hello outer"
anonymousFn();
console.log(window.myString);			// "hello global"
console.log(obj.myString);				// "hello anonymous function"

// ---

var obj = { myString: 'hello obj', log: logMyString },
    obj1 = { myString: 'hello obj1' };
function logMyString() {
	console.log(this.myString);
}
obj.log();						// "hello obj"
obj.log.apply(obj1);			// "hello obj1" <-- explicit win

// ---

var obj = { myString: 'hello obj', log: logMyString };
function logMyString() {
	this.myString = 'hello constructor';
}
var newObj = new obj.log();
console.log(obj.myString);					// "hello obj"
console.log(newObj.myString);				// "hello constructor" <-- new win

// ----

var obj = { myString: 'hello obj' };
function logMyString() {
	this.myString = 'hello constructor';
}
var bindedFn = logMyString.bind(obj),
    newObj = new bindedFn();
console.log(obj.myString);					// "hello obj"
console.log(newObj.myString);				// "hello constructor"


// -----


var obj = { myString: 'hello obj' },
    obj1 = {myString: 'hello obj1'};
function outer() {
    return () => {
    	console.log(this.myString);
    }
}
var arrowFn = outer.apply(obj);
arrowFn();							// "hello obj"
arrowFn.call(obj1);					// "hello obj"
new arrowFn();						// Uncaught TypeError: arrowFn is not a constructor








