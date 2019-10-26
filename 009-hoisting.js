
// why undefined???

// var myString is hoisting to the top of the function
// so the myString become undefined at that point
// var myString = 'inner'; required to break into two pieces
// var myString; and myString = 'inner';


var myString = 'outer';
(function testHoisting() {
  console.log(myString);			// undefined
  var myString = 'inner';
  console.log(myString);			// inner
})();
console.log(myString);				// outer



// -- function....

(function hoistFunction() {
	a();			// declaration
	var a = function() {
      console.log('expression');
    }
	function a() {
      console.log('declaration');
    }
    a();			// expression
})();


// 最佳實踐 - 宣告變數應該集中在當前 Scope 的最上面

