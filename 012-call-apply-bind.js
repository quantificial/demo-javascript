// normal

function add(a, b) {
    return a + b;
}
console.log(add(1, 2));						// 3
console.log(add.call(null, 1, 2));			// 3

console.log(add.apply(null, [5, 10]));


// --

function add(a, b) {
    return a + b;
}
console.log(add(1, 2));						// 3
console.log(add.call(null, 1, 2));			// 3
console.log(add.apply(null, [1, 2]));		// 3
console.log(add.apply(null, 1, 2));			// Uncaught TypeError: CreateListFromArrayLike called on non-object

// --

var list = [1, 5, 8];
function add() {
    return Array.from(arguments).reduce(function (sum, num) {
        return sum + num;
    });
}
console.log(add.call(null, 1, 2));			// 3
console.log(add.apply(null, list));			// 14

console.log(add(1, 2, 3, 4, 5))

// --

function add(a, b) {
    return a + b;
}

add.call(null, 1, 2);			// 3
add.call(null, 1, 4);			// 5
add.apply(null, [1, 2]);		// 3
add.call(null, [1, 4]);			// 5
var add1 = add.bind(null, 1);
console.log(add1(2));			// 3
console.log(add1(4));			// 5

// ------------------

function add(a, b) {
    return a + b;
}

function add() {
    return Array.from(arguments).reduce(function (sum, num) {
        return sum + num;
    });
}

function bind(t, callback) {
    var outerArgs = Array.from(arguments).slice(2);
    console.log("OuterArgs: " + outerArgs);
    return function () {
        var innerArgs = Array.from(arguments);
        console.log("InnerArgs: " + innerArgs);
        console.log("concat: " + outerArgs.concat(innerArgs));
        console.log("input: " + this.input);
        return callback.apply(t, outerArgs.concat(innerArgs));
    }
}
var addWithBind = bind(this, add, 1, 5);
console.log(addWithBind(8));				// 14


// ---

function mul(a,b) {
    console.log(this.input*a*b);
}

var i = {input: 10};
var c = mul.bind(i);
c(2,3);




