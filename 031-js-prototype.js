// prototype
// js use prototypal inheritance

const array = []

array.__protype__ // upward parent methods

let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5
    },
    sing() {
        if(this.fire) {
            return `I am ${this.name}, the breather of fire`
        }
    }
}

let lizard = {
    name: 'kiki',
    fight() {
        return 1
    }
}

const lizardSing = dragon.sing.bind(lizard);
console.log('bind', lizardSing()); // cannot sing

// inheritance solve...

lizard.__proto__ = dragon;
//lizard.prototype = dragon;
console.log('__proto__',lizard.sing())

// isPrototypeOf check the an object exists in target object chain
// dragon exists in lizard object chain...
// so lizard inherit dragon methods
console.log(dragon.isPrototypeOf(lizard)) 

for(let prop in lizard) {
    console.log('just property:',prop) // fight, fire and sing, name
}

for(let prop in lizard) {
    if(lizard.hasOwnProperty(prop)) {
        console.log('own property: ',prop)
    }
}

var array =[];
console.log(array.__proto__)

// ---
const obj = {name: 'Sally'}
obj.hasOwnProperty('name') // true
obj.hasOwnProperty('hasOwnProperty') // false

function a() {}
a.hasOwnProperty('name')
console.log(a.__proto__)

console.log([].__proto__.hasOwnProperty('map')) // true

// create own prototype
let human = {
    mortal: true
}

let socrates = Object.create(human) // prototype chain...
console.log(socrates.mortal)

// only function has the prototype property
function a() {}

a.__proto__ ====> Function.prototype
a.__proto__.__proto__ =====> Object.prototype
a.__proto__.__proto__.__proto__ = null


// exercise , create lastYear
Date.lastYear = function() {
    return this.getFullYear - 1;
}
new Date('1900-10-10').lastYear();
console.log(new Date('1900-10-10').getFullYear())


// solution:
Date.prototype.lastYear = function() {
    return this.getFullYear() - 1;
}
console.log(new Date('1900-10-10').lastYear());


Date.prototype.lastYear = function() {
    return this.getFullYear() - 1;
}
console.log(new Date('1900-10-10').lastYear());




// modify map
console.log([1,2,3].map(x=> x+'3'))

// solution.
Array.prototype.map = function() {
    let arr = [];
    for(let i=0;i<this.length;i++) {
        arr.push(this[i] + '!')
    }
    return arr;
}
console.log([1,2,3].map())


// create your own bind function
Function.prototype.bind = function(whoCall) {
    self = this;
    return function() {
        return self.apply(whoCall, arguments)
    }
}

function a() {
    console.log(this.name);
}

var obj = {name:'tom'}

a.bind(obj)();


