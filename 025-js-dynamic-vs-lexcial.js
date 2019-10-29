
const a  =function() {
    console.log('a', this)

    const b = function() {
        console.log('b', this)

        const c = {
            hi: function() {
                console.log('c', this)
            }
        }

        c.hi(); // c is an object and the function hi is in the object c
    }

    b(); // b is still a function
}

a(); // => window.a();

// in window execution environment
// a: window
// b: window (function b belongs to window object, not belong to function a)
// c: {hi: f}

// ---

const obj = {
    name: 'billy',
    sing() {
        console.log('a', this);
        var anotherFunc = function() {
            console.log('b', this) // not how this location is, it is how the function was called.
        }
        anotherFunc();
    }
}
obj.sing();

// obj.sing() belongs to obj, so 
// a => obj { billy, sing function}
// anoterhFunc is not belong to obj, it is just a nested function
// so this belongs to window


// so how to bind the this object in anotherFunc to obj?
const obj = {
    name: 'billy',
    sing() {
        console.log('a', this);
        var anotherFunc = () => {
            console.log('b', this) // not how this location is, it is how the function was called.
        }
        anotherFunc();
    }
}
obj.sing();

// another way

const obj = {
    name: 'billy',
    sing() {
        console.log('a', this);
        var anotherFunc = () => {
            console.log('b', this) // not how this location is, it is how the function was called.
        }
        return anotherFunc.bind(this); // this is obj
    }
}
obj.sing()();


// more way

const obj = {
    name: 'billy',
    sing() {
        console.log('a', this);
        var self = this;
        var anotherFunc = function() {
            console.log('b', this) // not how this location is, it is how the function was called.
        }
        return anotherFunc; // this is obj
    }
}
obj.sing()();


