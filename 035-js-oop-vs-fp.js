// class inheritance  vs function programming compose
// compose many function to create something big


// Inheritance
// focus on what it is
// there is a structure
//
// tight clouping of parent and child
// small change in parent class will affect the childs 
// hierarchy

// for example, a junior elf, just sleep and they don't need other parenet functions
// such as the methods inherit from Elf, User etc..


// composition
// focus what is has, what it does
// such as if the Elf need attack, we can add the attack function seperately

// function is externally defined
// it is small piece and combine to make something big
function getAttack(character) {
    return Object.assign({}, character, {attack: () => (console.log('attack!!'))})
}

function Elf(name, weapon, type) {
    let elf = {
        name: name,
        weapon: weapon,
        type: type
    }
    return getAttack(elf);
}

const greatElf = Elf('Tom','Stone', 'Elf')
console.log(greatElf)
greatElf.attack();


