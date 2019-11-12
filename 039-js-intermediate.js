// root scope

var b = "this can be access from bb"
console.log("root", b)

function bb() {
    // function scope
    var b = "hello"
    console.log("fun", b)
}

bb()

function bbb() {
    // accessed the global b
    b = "ok"
}

bbb();

console.log("next root", b)


// --


// || shortcut

var a = undefined
var b = a || "ok";
console.log(b)

// b = xxxx ? yyyyy : zzzz


// switch


// ---

// ES5 vs ES6

// ECMAScript === Javascript

// use babel to convert

const obj = {
    1 : 1000,
    2 : 2000,
    "ok" : 3000
}

console.log(obj[1]);
console.log(obj.ok);

// ---

const name = "Tom"
const greeting = `Hello ${name}`
console.log(greeting)


// --- advance function
// closure
// embedded the data
// child scope could always access the parent

const fn = () => {
    const second = () => {
        return 10;
    }
    return second;
}

const compose = (f,g) => (data) => f(g(data));

// advanced functions
var arr = [1,2,3,4,5]
var result = [];
const s = arr.forEach((x) => {
    result.push(x *2);
})

console.log(result)

const a1 = arr.map(x=>x*2);
console.log(a1)

const a2 = arr.filter(x => x%2===0)
console.log(a2)

const sum = arr.reduce((t,x) => {
    return t + x
},10) // 10 is starting number

console.log(sum)

// advanced objects


// es7

const pet = ['dog','cat']
pet.includes('cat');

// es8

console.log('xxx'.padStart(10));

let obj = {
    a: 'aaa',
    b: 'bbb',
    c: 'ccc'
}

Object.keys(obj).forEach((key, index)=> {
    console.log(key, obj[key])
})

// Object.values
// Object.entries
let a = {name: 'ok'};
let b = {age: 12};
let c = Object.assign({},a,b)
console.log(c)

// es 10
// flat

const array = [1,[2,3],4,5]
console.log(array.flat())
console.log(array.flatMap(x=>X))

// trimStart, trimEnd


// test function

function test() {
    this.name = "test name"
    console.log(this.name)
    this.sayHi = function() {
        console.log("hi")
    }
}

var testObj = new test();

console.log(testObj.name);
testObj.sayHi();
test.prototype.sayBye = () => {console.log('bye')}

testObj.sayBye();

function beta() {
    this.name = "beta"
    console.log("beta");
}

//beta.__proto__ = test;

var testBeta = new beta();
testBeta.__proto__ = testObj // must be object??
testBeta.sayBye();

// test class

class Beta {
    constructor() {
        this.name = "beta"
    }

    sayHi() {
        console.log('hi', this.name)
    }
}

const betaObj = new Beta();
betaObj.sayHi();

class Release extends Beta {
    constructor() {
        super();
        this.name = "Release"
    }

}

const objRelease = new Release();
objRelease.sayHi();