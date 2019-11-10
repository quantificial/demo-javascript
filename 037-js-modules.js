// modules


var user = {};

function signin(user) {
    var textfield = 'hehe';
}

function isHuman(user) {
    //........
}

// add variable to global scope, it's tight coupling

// global scope
// module scope <-- new
// function scope
// block scope

// become function scope
(function() {
 
})()


// module pattern
var fightModule = (function() {
    var a = 'xxx';
    var b = 'yyy';
    function fight() {
        return a +" fight "+ b;
    }
    return {
        fight:fight
    }
})()

// we could pass varible from global scope to 
// function scope and even the variables are modified 
// the global scope variables will not be changed.
//

// CommonJS

function fight() {

}

module.exports = {
    fight: fight
}
 
// ----
// in js file
export function fight(x,y) {
    return x > y;
}

export default function abc() {
    return "xyz"
}

// --- in html
// import {fight} from "fight.js"


// named exports

//------ lib.js ------
export const sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}

export {sqrt, square, diag}

//------ main.js ------
import { square, diag } from 'lib';				
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5

// aliasing named imports

import {square as sq} from 'lib';

//  namedspace import

import * as lib1 from './lib';

lib1.square(1);



