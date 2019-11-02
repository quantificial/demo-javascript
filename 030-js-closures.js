function a() {
    let grandpa = 'grandpa'
    return function b() {
        let father = 'father'
        return function c() {
            let son = 'son'
            return `${grandpa} > ${father} > ${son}`
        }
    }
}

console.log(a()()()) // this is function c

// child need grandpa and father, they will be kept


function boo(string) {
    return function(name) {
        return function(name2) {
            console.log(`${string} ${name} ${name2}`)
        }
    }
}

boo('hi')('tim')('becca');

const booString = boo('hi');

const booStringName = booString // hi is still in the memory
booStringName('ok')('la')

//exercise
function callMeMaybe() {
    const callMe = 'Hi! I am now here!'; // in closures
    setTimeout(function() {
        console.log(callMe)
    }, 4000)
}
callMeMaybe();

// closures and memory

// for memory efficient

function heavyDuty(item) {
    const bigArray = new Array(7000).fill('~')
    console.log('created!')
    return bigArray[item]
}

heavyDuty(777)
heavyDuty(771)

const getHeavyDuty = heavyDuty2();

getHeavyDuty(100)
getHeavyDuty(200)

function heavyDuty2() {
    const bigArray = new Array(7000).fill('~')    
    return function(item) { return bigArray[item]}
}

// and encapsulation

const makeNuclearButton = () => {
    let timeWithoutDestruction = 0
    const totalPeaceTime = () => timeWithoutDestruction;
    const passTime = () => timeWithoutDestruction++;
    const launch = () => { 
        timeWithoutDestruction = -1;
        return 'booom!' ;
    }
    setInterval(passTime,1000)

    return {
        launch: launch,
        totalPeaceTime: totalPeaceTime
    }
}

//const ohno = makeNuclearButton();
//in the ohno object, you can only call launch and totalPeaceTime and cannot access the varaible..
// it's the encapsulation



