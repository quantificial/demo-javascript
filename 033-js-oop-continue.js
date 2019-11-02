// OOP

class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;    
    }

    attack() {
        return 'attack with ' + this.weapon
    }
}

const fiona = new Elf('Fiona', 'ninja stars')
const ogre = { ... fiona}
ogre.attack() // not work

// improve

class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;    
    }

    attack() {
        return 'attack with ' + this.weapon
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type;
    }
}

const dolby = new Elf('dolby', 'cloth', 'house')

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color
    }

    makeFort() {
        return 'xxx'
    }
}

const shrek = new Ogre('Shrek', 'club', 'green')
shrek.makeFort();

// ES6 . method override
// 