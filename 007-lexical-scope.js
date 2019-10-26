var outer = 'From Outer';
function myFunction() {
  var inner = 'From Inner';
  console.log(outer);				// "From Outer"
  console.log(inner);				// "From Inner"
}
console.log(outer);					// "From Outer"
console.log(inner);					// Uncaught ReferenceError: inner is not defined



var myString = 'hello world';
function setAsLiteralObj(target) {
	target = {};
}
setAsLiteralObj(myString);
console.log(myString);					// 'hello world'
console.log(target);					// Uncaught ReferenceError: target is not defined




var outer = 'outer';
function myFunction() {
  var middle = 'middle';
  function myInnerFunction() {
    var inner = 'inner';
  }
  myInnerFunction();
}

myFunction();


//Lexical Scope 代表著區塊間的包裹關係，他的規則是：
//外層 Scope 無法取用內層變數，但內層 Scope 可以取用外層變數

