
// - udemy course: advanced javascript concepts 

// - javascript foundation

// V8 written by C++
// spidermonkey is the first javascript engine

// need to know the callstack logic
// call the function, push the function pointer to callstack

// test the javascript in chrome Snippets
// JS => single thread

// NodeJS => non-blocking design
// received the request and then immediately pass the request to the other workers.
// non-blocking does not mean mutil-threading






// -- why promise is executed before timeout??

setTimeout(() => { console.log('hi timeout')}, 0);

Promise.resolve('hi promise').then(function(value) {
  console.log(value);
});

console.log("normal");

// ------------------------------------------------------------
// - execution context 
// - callstack
// each function's call contains its execution context
// global execution context gave "global object" and "this"
// in browser, the global object is "window"
// and this === window 

a = "teddy"; // a is added to the global object window
window.a === "teddy" (true)

// global execution context is created
// => your code execution context is created.

// ------------------------------------------------------------
// lexcial environment
// where you write something
// new function => new lexcial environments
// A function inside B function, the A function is lexcially in the B function

