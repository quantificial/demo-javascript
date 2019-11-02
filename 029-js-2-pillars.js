// closure and prototype

//invoke function

function one () {
    return 1;
}

const obj = {
    two: function() {
        return 2;
    }
}

console.log(one());
console.log(obj.two());
obj.two.call();


const four = new Function('return 4');
console.log(four())

const num = new Function('num', 'return num')
console.log(num('x'))


// functions are first class citizens in JS
//1
var stuff = function() {}
//2
function a(fn) {
    fn()
}

a(function(){
    console.log('hi')
})
;
//3 return function
function b() {
    return function c() {console.log('hi c')}
}
b()();

function d() {
    return this.param;
}
const obj2 = {
    param: 10
}
console.log(d.call(obj2))


// higher order function

// create function for login
function letAdamLogin() {
    let array = []
    for(let i=0;i<1000000;i++){
        array.push(i)
    }
    return 'access granted to adam';
}

function letEvaLogin() {
    let array = []
    for(let i=0;i<1000000;i++){
        array.push(i)
    }
    return 'access granted to eva';
}

letAdamLogin();
letEvaLogin();

// duplicated effort....
// => improve

function letUserLogin(user) {
    let array = []
    for(let i=0;i<1000000;i++){
        array.push(i)
    }
    return 'access granted to ' + user;
}

console.log(letUserLogin('adam'))

// => more flexible..

const giveAccessTo = (name) => 'access granted to ' + name;

function letUserLogin(user) {
    let array = []
    for(let i=0;i<1000000;i++){
        array.push(i)
    }
    return giveAccessTo(user)
}

console.log(letUserLogin('adam'))

// => how about admin?

function authenticate(verify) {
    let array = []
    for(let i=0;i<verify;i++){
        array.push(i)
    }
    return true;
}

function letPerson(person, fn) {
    if(person.level === 'admin') {
        fn(500000)
    }else if(person.level === 'user') {
        fn(100000)
    }

    return giveAccessTo(person.name)
}

letPerson({level:'user', name:'Time'}, authenticate);

// another example

const multiplyBy = function(num1) {
    return function(num2) {
        return num1 * num2;
    }
}

const multiplyByTwo = multiplyBy(2); // create another function
// multiplyBy is higher two function
// => generic and re-use and create more functions

// more simplify...

const multiplyBy = (num1) => (num2) => num1*num2;
const multiplyByTen = multiplyBy(10);
console.log(multiplyByTen(2));

// => more program more general

