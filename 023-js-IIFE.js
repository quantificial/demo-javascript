//IIFE


(function() {

    console.log('hi!');

    var a = 10; // only exists in the function scope

})();

// ------

var script1 = (function(){

    // IIFE block...

    function a() {
        return 5;
    }

    return { a: a}; // function interface, return object contains a

})();

console.log(script1.a());

// ---

var $ = (function() {

    var _people = 'good';
    var _king = 'good';
    var _theif = 'bad';

    function hi(name) {
        return "hi " + name;
    }

    function king() {return _king};

    return {
        hi: hi, // interface...
        king:king
    }
})(); 

console.log($.hi('tom'));
console.log($.king());

