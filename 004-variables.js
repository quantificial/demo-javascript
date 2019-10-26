var a = 'hello world';

var void = 'hello world';			// Uncaught SyntaxError: Unexpected token void
var "a-1" = 1;						// Uncaught SyntaxError: Unexpected string

var a = 'hello world';
console.log(a);						// "hello world"
a = 123;
console.log(a);						// 123

// cannot delete variable
var a = 'hello world';
console.log(a);						// "hello world"
delete a;							// false
console.log(a);						// "hello world"

'use strict'
var a = 'hello world';
console.log(a);						// "hello world"
delete a;							// Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.
console.log(a);						// "hello world"

// 非 strict mode 下，不用 var 宣告就使用未曾出現的變數名稱，則該變數名稱會變成根物件的屬性

function innerTest() {
	innerVar = 'Im innerVar';
}
innerTest();
console.log(innerVar);					// "Im innerVar"
console.log(window.innerVar);			// "Im innerVar"

// 在全域範疇 ( Global Scope ) 中宣告變數 vs. 不用 var 宣告就使用未曾出現的變數名稱

var a = 'hello world';
delete a;								// false
console.log(window.a);					// "hello world"

function innerTest() {
	innerVar = 'Im innerVar';
}
innerTest();
delete innerTest();						// true
console.log(window.innerVar);			// Uncaught ReferenceError: innerVar is not defined at <anonymous>:1:1

// 變數無法被刪除

var myVar = 'Variable';
myProp = 'Property'
console.log(window.myVar);			// "Variable"
console.log(window.myProp);			// "Property"

delete myVar;
delete myProp;
console.log(window.myVar);			// "Variable"
console.log(window.myProp);			// undefined


// 無論在任何地方宣告變數時，務必使用 var ，否則會變成全域變數的屬性
// 盡量不要在全域範疇 ( Global Scope ) 中宣告變數，否則會變成全域變數的屬性
