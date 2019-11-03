// async

setTimeout(() => { console.log('1. hi')},0);

Promise.resolve('promise hi').then((data) => {
    console.log(data)
})

var f = new Promise((resolve,reject) => {
    resolve('another promise')
})

f.then((data => {
    console.log(data)
}))

console.log('normal');

// javascript is a single-threaded language that is non-blocking
// single-threaded => one call stack

const e = new Promise((resolve, reject) => {
    resolve('999')
});

e.then((data)=> {
    throw Error
}).catch(
    () => console.log('error')
)


// ====
// promise

urls = ['https://jsonplaceholder.typicode.com/todos/1', 'https://jsonplaceholder.typicode.com/todos/2']

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json()) // the return value will be passed to next then block
  .then(json => console.log(json))
;


// ====
// aync await
// make code easier to read
// but basically, it's the same
const hi = (x, time) => new Promise((resolve,reject) => {
    console.log("hi " + x)
    setTimeout(() => resolve("hi" + x),time)
})
async function sayHi() {
    await hi('1', 1000) // await, wait the function complete
    await hi('2', 2000)

    return 'completed!'
}

sayHi().then(x => {
    console.log(x)
})

// more promise example

Promise.all(urls.map(x =>fetch(x).then(
    res => {
        return res.json()
    }
))).then( x => {
    console.log(x[0]);
    console.log(x[1]);
})

const getData = async function() {
    try {
        //fetch(....)
        // const [xx,yy,zz] = await Promise.all(x.map(y => fetch(y).then(res => res.json)))
        // if three urls... return three item in an array
    }catch(err) {
        console.log('error',err)
    }
}


// ES9
// Object spread operator

const animals = {
    tiger: 25,
    lion: 5,
    monkey: 2
}

const {tiger, ...rest} = animals;
console.log(tiger);

// new feature
// promise => finally
// .catch(x => x)
// .finally()

// new feature : async await of'

const getData2 = async function() {
    const arrayOfPromises = urls.map(url => fetch(url)); // define
    for await (let request of arrayOfPromises) { // start execution
        const data = await request.json();
        console.log(data);
    }
}

// fetch more example
console.log(JSON.stringify({name: 'tom', value:1234}))

let url = 'https://hexschool-tutorial.herokuapp.com/api/signup';
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Token' : 12345678
  },
  body: JSON.stringify({
    email: 'lovef1232e@hexschool.com',
    password: '12345678'
  })
}).then((response) => {
    return response.json(); 
  }).then((jsonData) => {
    console.log(jsonData);
  }).catch((err) => {
    console.log('錯誤:', err);
})



// job queue and callback queue
// remember javascript runtime
// call stack
// memory heap
// web api
// job queue
// callback queue
// event loop

// Callback Queue - Task Queue
setTimeout(() => {
    console.log('hi')
},1000)

// Job Queue - Microtask Queue - higher priority than callback queue
Promise.resolve('hi').then(x => {
    console.log(x)
})

// normal
console.log('hi')


// more promise
// 1. run promise in parallel
// 2. run promise in sequence
// 3. use race, whatever one complete

// parallel

const a = new Promise(resolve => resolve('a'))
const b = new Promise(resolve => resolve('b'))
const c = new Promise(resolve => resolve('c'))

async function parallel() {
    const group = [a,b,c]
    const [o1,o2,o3] = await Promise.all(group);
    console.log(o1,o2,o3)
    return 'completed!'
}

parallel().then((x) => console.log(x))


// race
await Promise.race(group)

// sequence... more easym use await
async function sequence() {
    const o1 = await a()
    const o2 = await b()
    const o3 = await c()
    return 'completed';
}


// ===
// thread, concurrency and parallelism

// where WEBAPI has the power to compute?
// there is a web worker..in browser.

// how to use multi thread in nodejs...
const{spawn} = require('child_process')
console.log(spawn('git', ['stuff'])) // not sure




