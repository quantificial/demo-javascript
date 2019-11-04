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


