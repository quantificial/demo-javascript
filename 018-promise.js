

// seems normal, an analyze api to take param1 as data
// and param2 as callback function
// but users report that two charges has been applied
// maybe due to analyze API bug

analyze({}, chargeMoney.bind(null, 100));

function chargeMoney(money) {
  console.log('charged ' + money);
}

// charged 100
// charged 100

function analyze(data, callback) {
    // analyze data
    callback();
    // some more codes
    callback();
  }

// 使用傳統的 callback 方法就代表把非同步的控制權交給被呼叫的函式了，你無法控制被呼叫函式會怎麼呼叫你的 callback
// 你無法控制第三方的函式會不會在 正確的時間點呼叫 以及 呼叫正確的次數 的 callback 函式，而這可能會引發災難。

// use promise

var defer = new Promise(function(resolve, reject) { 
    // if success, resolve()
    // if fail, reject()
})
.then(laterOn)
.catch(printError);


// use promise, we can control our callback

function analyze(data) {
    return new Promise(function(resolve, reject) {
      // something else
      // analyze data
      resolve();
      // some more codes
      resolve();
    })
  }

analyze({})
  .then(chargeMoney.bind(null, 100));

function chargeMoney(money) {
  console.log('charged ' + money);
}


// -- why promise is executed before timeout??

setTimeout(() => { console.log('hi timeout')}, 0);

Promise.resolve('hi promise').then(function(value) {
  console.log(value);
});

console.log("normal");


// --

var a = new Promise(function(resolve, reject) {
    console.log("in promise...")
    setTimeout(function(){
        resolve('hello world');
    }, 10000);
});

a.then(function(value) {
console.log(a);				// Promise {<resolved>: "hello world"}
console.log(value + '1');		// "hello world1"
});
a.then(function(value) {
console.log(a);				// Promise {<resolved>: "hello world"}
console.log(value + '2');		// "hello world2"
});

console.log(a);					// Promise {<pending>}


// reject

var a = new Promise(function(resolve, reject) {
    setTimeout(function(){
        reject('OOPS');
    }, 1000);
});

a.catch(function(value) {
console.log(a);				// Promise {<reject>: "OOPS"}
console.log(value);			// "OOPS"
});

// pending
var a = new Promise(function(resolve, reject) {});
a.then(function() {
    console.log("completed");
})
console.log(a);					// Promise {<pending>}


// promise chain

asyncFn('1')
.then(syncFn)
.then(asyncFn);

function asyncFn(data) {
	return new Promise(function(resolve, reject) {
      		 console.log('Async received data:', data);
			 setTimeout(function(){
				resolve('async fn');
			 }, 1000);
		   });
}

function syncFn(data) {
  console.log('Sync received data:', data);
  return 'sync fn';
}

// "Async received data: undefined"
// "Sync received data: async fn"
// "Async received data: sync fn"


