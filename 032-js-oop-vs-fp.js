// oop and FP

const elf = {
    name: 'Orwell',
    weapon: 'bow',
    attack() {
        return 'attack with ' + elf.weapon
    }
}

// ====> problem... create and copy code for other elf...

// factory function

function createElf(name, weapon) {
    return {
        name: name,
        weapon: weapon,
        attack() {
            return 'attack with ' + elf.weapon
        }
    }
}

// function to create object
const peter = createElf('Peter', 'stones')

// thousnds elf... how to avoid memory of storing attack function?
const elfFunctions = {
    attack() {
        return 'attack with ' + this.weapon
    }
}

function createElf(name, weapon) { 
    return {
        name: name,
        weapon: weapon
    }
}

const peter = createElf('Peter', 'stones')
peter.attack = elfFunction.attack // need manually attach method..

// improve

const elfFunctions = {
    attack() {
        return 'attack with ' + this.weapon
    }
}

function createElf(name, weapon) { 
    let newElf = Object.create(elfFunctions); // create a link... newElf to elfFunctions
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
}

const peter = createElf('Peter','stones')


// more OOP
// constructor functions
// need to use new keyword
// and the new execution context is created for each object
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

// use prototype to add functionality
Elf.prototype.attack = function() {
    return 'xxxxxx ' + this.weapon;
}

Elf.prototype.build = function() {
    function building() {
        return this.name + " builds a house";
    }
    return building(); // return undefined
    // need to change to return building.bind(this)();

    // or 
    // const self = this
    // function building () {
    //  return self.name + " builds a house";
    // }
    // return building()
}

const peter = new Elf('Peter', 'stones')

const Elf1 = new Function('name','weapon',`
this.name = name;
this.weapon = weapon;
`)


// ES6

class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;    
    }

    attack() {
        return 'attack with ' + this.weapon
    }
}

const a = new Elf('peter', 'water');
console.log(a.attack())

// new binding this

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('xavier',55);

// implicit binding
const person = {
    name: 'kiki',
    age: 20,
    hi() {
        console.log('hi ' + this.name);
    }
}

// explictit binding
const person3 = {
    name: 'tom',
    age: 18,
    hi: function() {
        console.log('hi ' + this.name)
    }.bind(xxx)
}


// arrow function => lexical scope
const person3 = {
    name: 'tom',
    age: 18,
    hi: function() {
        var inner = () => {
            console.log('hi ' + this.name) // this is the lexcial in this object when use arrow
            // otherwise, this will be global object
        }
        return inner();
    }
}


