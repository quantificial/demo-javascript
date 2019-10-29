// `this` create too much confusion

var a = "hi";
console.log(`${a} ....`);

var s = "gook";

function string2Bin(str) {
  var result = [];
  for (var i = 0; i < str.length; i++) {
    result.push(str.charCodeAt(i));
  }
  return result;
}

function bin2String(array) {
  return String.fromCharCode.apply(String, array);
}


console.log(stringToBytes('dddd'));

function stringToBytes(str) {
  var ch, st, re = [];
  for (var i = 0; i < str.length; i++) {
    ch = str.charCodeAt(i);  // get char 
    st = [];                 // set up "stack"
    do {
      st.push(ch & 0xFF);  // push byte to stack
      ch = ch >> 8;          // shift value down by 1 byte
    }
    while (ch);
    // add stack contents to result
    // done because chars have "wrong" endianness
    re = re.concat(st.reverse());
  }
  // return an array of bytes
  return re;
};


// ---------------------------------------------
// this
// this is the object 

// if not use strict, this => global
// if use strict, this => undefined
a=10;
function b() {
  'use strict'
  console.log(this);
  console.log(this.a);
}
b();

// ---------------------------------------------
// demo of how to use this
var a = 10;
const obj = {
  name: 'tom',
  sing: function() {
    return 'lalalal ' + this.name + this.a;
  },
  singAgain() {
    return this.sing();
  }
}

console.log(obj.sing())

console.log(obj.sing.bind(this).call())

// ---------------------------------------------
// same function, apply to different objects
// and refer to different obj's "this"
function importantPerson() {
  console.log(this.name);
}

const name = 'Sunny';

const obj1 = {
  name: 'Cissy',
  importantPerson: importantPerson
}

obj1.importantPerson();

const obj2 = {
  name: 'Tom',
  importantPerson: importantPerson
}

obj2.importantPerson();


