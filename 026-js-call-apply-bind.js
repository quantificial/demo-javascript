// call() apply() bind()


function a() {
    console.log('hi')
}

a.call()
a();
a.apply()


const wizard = {
    name: 'Merlin',
    health:100,
    heal() {
        return this.health = 100;
    },
    heal(num1, num2) {
        return this.health += (num1+num2)
    }
}

const archer = {
    name: 'Robin Hood',
    health: 30,
}

wizard.heal();

// borrow heal for archer
// use archer to call heal
console.log('archer: ' + archer.health)
wizard.heal.call(archer, 50,30) // call, use parameter
console.log('archer: ' + archer.health)
wizard.heal.apply(archer, [1,2]) // apply use array
console.log('archer: ' + archer.health)

const healArcher = wizard.heal.bind(archer, 5,10)
healArcher()
console.log('archer: ' + archer.health)

// exerecise

const array = [1,2,3];
function getMaxNumber(arr) {
    return Math.max.apply(null, arr)
    //return Math.max(...arr)
}

console.log(getMaxNumber(array))


// function currying

function multiplay(a,b) {
    return a*b
}

let multiplayByTwo =  multiplay.bind(this,2);

console.log(multiplayByTwo(3)) // become 2*3

// exerecise

var b = {
    name: 'jay',
    say() { console.log(this)} // { name: jay, say: [Function: say]}
}

var c = {
    name: 'jay',
    say() { return function() { console.log(this)}} // window object
}

var d = {
    name: 'jay',
    say() { return () => console.log(this)} // { name: jay, say: [Function: say]}
}

//b.say()
//c.say() // => Function
//c.say()() // => window object or node global object
d.say()() // => // { name: jay, say: [Function: say]}

// exercise:

const character = {
    name: 'Simon',
    getCharacter() {
        return this.name
    }
};

const giveMeTheCharacterNOW = character.getCharacter;

console.log('?', giveMeTheCharacterNOW.call(character));
console.log('?', giveMeTheCharacterNOW.apply(character));
console.log('?', giveMeTheCharacterNOW.bind(character)());

// or 
const giveMeTheCharacterNOWb = character.getCharacter.bind(character);
console.log('?', giveMeTheCharacterNOWb());







