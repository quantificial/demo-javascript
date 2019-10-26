var myObj = { prop1: 'hello world', "prop-2": 123 };

var myObj = { prop1: 'hello world', "prop-2": 123 };

// 利用 . 操作屬性 只能在 key 不包含符號的狀況下使用
// read property
console.log(myObj.prop1);			// "hello world"
console.log(myObj.prop-2);			// NaN

// 利用 [] 操作屬性
var myObj = { prop1: 'hello world', "prop-2": 123, "777": 456 },
    myProperty = 777;
console.log(myObj["prop1"]);				// "hello world"
console.log(myObj["prop-2"]);			// 123
console.log(myObj[myProperty]);			// 456

console.log(JSON.stringify(myObj,null,2));

// add

var myObj = { prop1: 'hello world' },
    myProperty = 777;
myObj[prop1] = 'hey world';
myObj["prop-2"] = 123;
myObj[myProperty] = 456;

console.log(myObj[prop1]);				// "hey world"
console.log(myObj["prop-2"]);			// 123
console.log(myObj[myProperty]);			// 456

// delete

var myObj = { prop1: 'hello world', "prop-2": 123, "777": 456 },
    myProperty = 777;
delete myObj.prop1;
delete myObj[myProperty];

console.log(myObj);			// { "prop-2": 123 }

// array

var myArray = [1, 2, 3];
console.log(myArray);				// [1, 2, 3]

delete myArray["0"];
console.log(myArray);				// [empty , 2, 3]
console.log(myArray[0]);			// undefined

var myArray2 = [undefined, 2, 3];
console.log(myArray2);

