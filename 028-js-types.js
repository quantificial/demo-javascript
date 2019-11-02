typeof 5 //  number
typeof true // boolean
'string'
undefined
null
Symbol('ddd')
function a (){}

// typeof null => object <== bug....
console.log(typeof null)
console.log(typeof Symbol('justme'))

typeof {} // object
typeof [] // object

var obj1 = {name: 'abc'}; // JSON, it's object
console.log(typeof obj1)

function hello() { console.log('hi')}
obj1.h = hello;
obj1.h();

var obj2 = obj1

obj2.h();

// array

var array = [1,2,3]

var array2 = {
    0: 1,
    1: 2,
    2: 3    
}

console.log(Array.isArray(array))
console.log(typeof array)

// array in JS is object... hard to check and need to use Array.isArray


// primitive type.... each variable contains value and a new memory space
// object is not.. they have the reference to the memory space

// primitive
var a = 5; var b = a; b++; console.log(a);

// objects
let obj1= {a: 5}; let obj2 = obj1; obj2.a++; console.log(obj1);

// check array
let v = [1,2,3,4,5]
let u = [].concat(v) // new array
v.push(123)
console.log(v)
console.log(u)

// clone object
let obj = {a: 'a', b: 'b'}
let clone = Object.assign({}, obj);
let clone2 = {...obj}
console.log(clone)


// object under object is not clone... => NOT Deep Copy

function hello() { console.log(hi)}

let obj = {
    a: 'a',
    b: 'b',
    c: {
        message: 'secret message'
    }, 
    hi: hello
}
let obj2 = Object.assign({}, obj)
obj.c.message = 'ok'
console.log(obj2)

// deep clone data method

let obj3 = JSON.parse(JSON.stringify(obj));
obj2.c.message = 'la la la' 
console.log(obj3); // no change to la la la but function is not cloned

// exercise: compare objects

var user1 = {name: "nerd", org: "dev"}
var user2 = {name: "nerd", org: "dev"}
var eq = user1 == user2

console.log(eq) // it's false... because of comparing the memory pointer

// fast compare
console.log (JSON.stringify(user1) === JSON.stringify(user2))

// slow.. need to write a deep compare function to loop through all the parameters


// exericse
const number=10
const string = "Jay"
let obj1 = {
    value: "a"
}
let obj2 = {
    value: "b"
}
let obj3 = obj2
function change(number, string, obj1, obj2) {
    number = number *2;
    string = "Pete";
    obj1 = obj2;
    obj2.value = "c";
}
change(number, string, obj1, obj2);

console.log(number) // 10
console.log(string) // Jay
console.log(obj1.value) // "a"

(function a(i) { console.log(i)})(10);

// type coercion

console.log(1 == '1')

console.log(false == "")
console.log( 0 == [])
console.log( 0 == {})
console.log( 0==null)

// JTS: Dynamic vs Static typeing

// statically, need to declare the type
// dynamic... type checking is in runtime




