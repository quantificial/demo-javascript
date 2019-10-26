
// 能夠傳遞 Scope，並允許 Scope 在原有位置以外取用的能力即為 Closure

function testClosure() {
    var inner = 'inner';
    function getInner() {
      return inner;
    }
    return getInner;
  }
  
  var innerFn = testClosure();
  console.log(innerFn());			// inner


// 就算是 Funciton 已經執行完畢了，只要內部有 Function 被傳遞到其他地方，JavaScript 還是會保留這個 Scope，之後當內部 Function 被執行時，就能透過 Scope 查找往上找到外層 Scope。
// Closure 是 允許 Scope 在原有的位置以外被取用 的能力



function asyncLog(message) {
    setTimeout(function() {
      console.log(message);			// "logged after one second"
    }, 1000);
  }
  asyncLog('logged after one second');


  for(var i = 0; i < 5; i++) {
    setTimeout(function() {
      console.log(i);				// 5 5 5 5 5
    }, 1000);
  }

  for(var i = 0; i < 5; i++) {
    (function(i) {
      setTimeout(function() {
        console.log(i);			// 0 1 2 3 4
        }, 1000);
    })(i);
  }

