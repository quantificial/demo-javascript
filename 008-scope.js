// 如果曾經學習過 C++ 與 Java 等語言，你會知道在這些語言中，
// 例如 if() {}、for() {} 等 {} 包裹的區塊是會產生一層 Scope 的，
// 但很不幸的，JavaScipt 會為 Function 產生 Scope，而不是為每個 {} 都產生

function myFunction() {
    if (true) {
      var insideIf = 'This is inside if';
    }
    console.log(insideIf);		// "This is inside if"
  }

  myFunction();


  // Function 為 JavaScript 中最常見的 Scope 單位，而非 {} 組成的區塊。

  // catch、with也可以產生 Scope

  // let、const 會把區塊當作 Scope

  function logNonExist() {
    console.log( notDeclaredVar );		
  }
  logNonExist();		// Uncaught ReferenceError: notDeclaredVar is not defined


  // become global variable and need to 'use strict' to prevent
  function assignToNonExist() {
    notDeclaredVar = 'I am is not Declared';
  }
  assignToNonExist();
  console.log(notDeclaredVar);				// "I am is not Declared"
  console.log(window.notDeclaredVar);			// "I am is not Declared"

// shadowing

var myString = 'hello global';
function testShadowing() {
  var myString = 'hello scope';
  console.log(myString);			//  "hello scope"
}
testShadowing();
console.log(myString);				// "hello global"


