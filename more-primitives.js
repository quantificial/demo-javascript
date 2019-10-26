/*
string
number
boolean
null
undefined
*/

var myString = 'hello world';
var myStringObj = String('hello world');

var myString = 'hello world';
console.log(myString[0]);				// "h"
console.log(myString[5]);				// " "
console.log(myString[11]);				// "d"

var myNumber = 100,
	myNegativeNumber = -100,
	myfloatNumber = 0.3,
	myOctal = 012,						// 10
	myHex = 0xFF,						// 255
	myScientificNotation = 513e-5,		// 513e-5
	myInfinity = Infinity,
    myNaN = NaN;
    
// conversion
Number('0100');			// 100
Number('0100.1');		// 100.1
Number('100abc');		// NaN
Number(undefined);		// NaN
+'0100';				// 100
+'0100.1';				// 100.1
+'100abc';				// NaN
+undefined;				// NaN

parseInt('0100');				// 100
parseInt('0100', 8);			// 64
parseInt('0100.1');				// 100
parseInt('100abc');				// 100
parseInt(undefined);			// NaN


parseFloat('0100');				// 100
parseFloat('0100.1');			// 100.1
parseFloat('100abc');			// 100
parseFloat(undefined);			// NaN

// error in float and need to use toFixed 
//0.1 + 0.2 = 0.30000000000000004;
0.1 + 0.2 === 0.3;									// false
parseFloat((0.1 + 0.2).toFixed(10)) === 0.3;		// true

// NaN
typeof NaN;			// number

NaN === NaN			// false
NaN == NaN			// false

// boolean

var myBoolean = true;
var myBoolean = false;
Boolean('hello world');		// true

// sugar conversion
!!'hello world';			// true
!'hello world';			// false

// 如果我們把非 boolean 值放入 if () 裡面就會觸發強制轉型

var hello = 'hello world';
if (hello) {
	console.log(hello);		// "hello world"
}

// 如果一個值被強制轉型為 boolean 的結果為 false 的話，則我們就稱此值為 falsy。

!!false				// false
!!0					// false
!!''				// false
!!null				// false
!!undefined			// false
!!NaN				// false


// 如果一個值被強制轉型為 boolean 的結果為 true 的話，則我們就稱此值為 truthy。

!!' ';				// true
!!1;				// true
!!-Infinity;		// true
!!{};				// true
!![];				// true

console.log(!'aaa');

var nothing = undefined;
console.log(nothing);			// undefined

var nothingInside;
console.log(nothingInside);		// undefined

