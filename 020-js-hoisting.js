// ------------------------------------------------------------
// Hoisting
// move the varaible and function defintiion to the top during compilation phase

console.log(teddy);
var teddy='bear';

// ===>

var teddy = undefined;
console.log(teddy);
teddy = 'bear';


// also for the function
sing(); // <= sing is not defined
(function sing() {console.log('la la la')});


// ---
let teddy ='bear'; // no hoisting
const teddy = 'bear'; // no hoisting

// ---
sing2(); // <- error, as function expression no hoisting
var sing2 = function() {
    console.log('la la test');
}
sing2();



// function....

a();
function a() { console.log('morning')};
a();
function a() { console.log('afternoon')};
a();
function a() { console.log('bye')};
a();


// hoisting happens in every execution context, such as a new function

var food = 'grapes';

var eat = function() {
    console.log('original food: ' + food);

    var food = 'orange'; // <-- change var to let to avoid hoisting

    console.log('new food: ' + food);
}

eat();


// ---

function bigBrother(){
    function littleBrother() {
      return 'it is me!';
    }
    return littleBrother();
    function littleBrother() {
      return 'no me!';
    }
  }
  
  // Before running this code, what do you think the output is?
  bigBrother();

// ----

