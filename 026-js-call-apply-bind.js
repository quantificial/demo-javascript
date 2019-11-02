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


