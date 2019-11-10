// error handling

new Error('opps')

throw new Error('oops')

throw 'string'

throw true

const myError = new Error('abc')

console.log(myError.message)
console.log(myError.stack)

// ---
function a() {
    const b = new Error('.....');
    return b
}

a()

// ------

function fail() {
    try {
        consol.log('.....')
    } catch(error) {
        console.log('catch', error)
    }
}

fail()

// ---
function anotherFail() {
    try {
        console.log('.....')
        throw new Error('oh ...')
    } catch(error) {
        console.log('catch', error)
    } finally {
        console.log('final ...')
    }   
} 

anotherFail()

// -- try catch cannot work in async function, such as setTimeout

// Promise contain .catch method to catch the error

Promise.resolve('hi')
.then( x => {
    console.log(x)
    throw new Error('this is error')
    //return 'ok'
})
.then(y => {
    console.log(y)
})
.catch(err => {
    console.log('error', err)
}).then (z => {
    console.log(z)
})

// --- try catch of async functions

(async function() {
    console.log('start asycn function')
    await Promise.reject('oh')
    .catch( err => {
        console.log(err)
    })

    try {
        await Promise.reject('oh #2')
    }catch(error) {
        console.log('error catch',error)
    }
})()

// ---

