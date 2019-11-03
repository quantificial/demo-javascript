// functional programming

// fp focus on seperate of concerns

// pure functions

// compose and pipe


// ---

//no side effects
// same input -> consistent same output

const array = [1,2,3]
function mutateArray(arr) {
    arr.pop()
}
mutateArray(array)
console.log(array) // <- changed the input... has side effect!!!


// no side effect, not change the input array
function removeLastItem(arr) {
    const newArray = [].concat(arr);
    newArray.pop()
    return newArray;
}

function multiplyBy2(arr) {
    return arr.map(item => item * 2);
}

multiplyBy2(array)
console.log(array)

// * idempotent
function notGood(num) {
    return Math.random()
}

// * imperative vs declarative

// imperative
// need to tell all steps how to do
for(let i=0;i<1000;i++) {
    console.log(i)
}

// for example, jqery more imperative... 
// need to tell when click to do blahhhh baba

// declarative
// more declare.. i have not told to loop through 3 times...
[1,2,3].forEach(x => console.log(x))

// react is more declarative... do not need to tell react how to do steps by steps..

// * immutability
// not changing the data
// not changing the status, instead return new status
const obj = {name: 'andrei'}
function clone(obj) {
    return {...obj};
}

// HOF
const hof = () => () => 5;

const hof = (fn) => fn(5);
hof(function a(x){return x});

// Closure
const closure = function() {
    let count = 0;
    return function increment() { // not pure function
        count++;
        return count;
    }

    function getCounter() {
        return count; // it's pure function
    }
}
const incrementfn = closure();
incrementfn();

// currying
const multiplay = (a,b) => a*b;
multiplay(3,4)

const curriedMultiplay = (a) => (b) => a*b;
curriedMultiplay(5)(3); // one parameter one time
// => so to create another function
const curriedMultiplyBy5 = curriedMultiplay(5);


// * Partial Application
const multiplay = (a,b,c) => a*b*c;
const curriedMultiply = (a) => (b) => (c) => a*b*c;

const partialMultiplyBy5 = multiplay.bind(this,5);


// caching for functional programming
// same input => consistent same output
// so we could use caching

function add(n) {
    console.log('take long time to processing');
    return n+80;
}

// apply cache
// if not put cache to global scope, we need to use closure
// and return a new function
let cache = {};
function cacheAdd(n) {
    console.log(cache)
    if(n in cache) {
        return cache[n]
    }else {
        cache[n] = add(n)
        return cache[n];
    }
}
console.log(cacheAdd(1));
console.log(cacheAdd(1));

// compose and pipe

// 1. multiply and abs...
// => const multiplyAndAbs = compose (.........)
// => need to use another library, such as Ramda compose

const compose = (f,g) => (data) => f(g(data))
const pipe = (f,g) => (data) => g(f(data))
const multiplyBy3 = (x) => x+3;
const makePositve = (x) => Math.abs(x);
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositve)
console.log(multiplyBy3AndAbsolute(-50))

//fn1(fn2(fn3(50))) = compose(fn1,fn2,fn3)(50)
//arity, how many parameters the function take



// amazon

const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

var a = purchaseItem(user, {name: 'laptop', price: 334})
var b = purchaseItem(a, {name: 'laptop b', price: 334})
console.log(b)

function purchaseItem(user, item) {
    return Object.assign({}, user, {purchases: item})
}


// ---

// 1. add item to card
// 2. add 3% text to item in cart
// 3. buy item: cart ---> purchases
// 4. empty cart

// bonus:
// accept refunds
// tract user history

const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}
const {cart} = user; // extract the cart from user
console.log(cart);

function a(...args) {
    console.log(...args);
}
a('x123',1,2,3,4,5,[123,99])
/*
    function compose(f,g) {
        return function(...args) {
            return f(g(...args))
        }
    }
*/
// fn1, fn2, fn3, fn4
// params => fn1(fn2(f3(f4(parmas))))
const compose = (f, g) => (...args) => f(g(...args));

// => become compose
var r = 
purchaseItems(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
)(user, {name: 'laptop', price: 100})

console.log(r);


function purchaseItems(...fns) {
    return fns.reduce(compose);
}
console.log([1,2,3,4].reduce((x,y) => {console.log('total: ' + x, 'input '+ y);return x+=y}));
console.log([1,2,3,4,5].reduce((x)=> {console.log('x: ' + x); return x;}))
// input: 1,2,3,4
// add((add(add(1,2),3),4)
// compose(f,g) => f(g(x))
// input: emptyCart, buyItem, applyTaxToItems, addItemToCart
// compose(compose(compose(emptyCart,buyItem),applyTaxToItems), addItemToCart)
// compose(compose(emptyCart(buyItem()),applyTaxToItems), addItemToCart)
// x => emptyCart(BuyItem(ApplyTaxToItems(addItemToCart(x))))
function addItemToCart(user, item) {
    console.log('add item to cart');
    const updateCart = user.cart.concat(item);
    return Object.assign({}, user, {cart: updateCart});
}

function applyTaxToItems(user) {
    console.log('add tax to items');

    const {cart} = user;
    const taxRate = 1.3
    const updatedCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price * taxRate
        }
    })

    return Object.assign({},user, {cart: updatedCart})
}

function buyItem(user) {
    console.log('buy item');
    return user
}

function emptyCart(user) {
    console.log('empty cart');
    return user
}

// ===> if use pipe
// process f first and then pass the value to g
const pipe = (f, g) => (...args) => g(f(...args));

const addOne = (x) => x+1;
const mulTen = (x) => x*10;

var r = [addOne,mulTen].reduce(pipe)(10);
console.log(r)

// example
[1,2,3,4].reduce((x,y) => x=x+y)
// => (((1+2)+3)+4)