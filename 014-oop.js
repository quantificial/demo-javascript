var myArray1 = [],
    myArray2 = [];
console.log(myArray1);		// []
console.log(myArray2);		// []

// ---

function Dog(name) {
    this.name = name;
    this.speak = 'Bark';
    this.move = 'walk';
  }
  var dog = new Dog('Blacky');
  console.log(dog);			// Dog {name: "Blacky", speak: "Bark", move: "walk"}

// -----


function Dog(name) {
    this.name = name;
    this.speak = function() {
        console.log('Bark');
    };
    this.move = function() {
        console.log('walk');
    };
  }
  var dog1 = new Dog('Blacky'),
      dog2 = new Dog('Whity');
  dog1.speak();					// Bark
  dog2.speak();					// Bark

  // -----

  function Dog(name) {
    this.name = name;
  }
  Dog.prototype.speak = function() {
     console.log('Bark');
  };
  Dog.prototype.move = function() {
     console.log('walk');
  };
  var dog1 = new Dog('Blacky'),
      dog2 = new Dog('Whity');
  dog1.speak();					// "Bark"
  dog2.speak();					// "Bark"
  
  Dog.prototype.speak = function() {
     console.log('Bow-wow');
  };
  dog1.speak();					// "Bow-wow"
  dog2.speak();					// "Bow-wow"


  //---

  function Animal(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }
  Animal.prototype.speak = function() {
    console.log('some sounds');
  };
  Animal.prototype.move = function() {};
  
  
  function Dog(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }
  Dog.prototype = Animal.prototype;
  Dog.prototype.speak = function() {
     console.log('Bow-wow');
  };
  Dog.prototype.move = function() {
     console.log('walk');
  };
  
  
  var dog1 = new Dog('Blacky', 'male', 3),
      dog2 = new Dog('Whity', 'female', 1),
      animal = new Animal('Browny', 'male', 5);
  dog1.speak();					// "Bow-wow"
  dog2.speak();					// "Bow-wow"
  animal.speak();					// "Bow-wow" <--- wrong
  
  // --
  // correct

  Dog.prototype = Object.create(Animal.prototype);

  // ---


  function Animal(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }
  Animal.prototype.speak = function() {
    console.log('some sounds');
  };
  Animal.prototype.move = function() {};
  
  
  function Dog(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.speak = function() {
     console.log('Bow-wow');
  };
  Dog.prototype.move = function() {
     console.log('walk');
  };
  
  
  var dog1 = new Dog('Blacky', 'male', 3),
      dog2 = new Dog('Whity', 'female', 1),
      animal = new Animal('Browny', 'male', 5);
  dog1.speak();					// "Bow-wow"
  dog2.speak();					// "Bow-wow"
  animal.speak();					// "some sounds"




// ES 6

class Animal {
    constructor(name, gender, age) {
      this.name = name;
        this.gender = gender;
        this.age = age;
    }
    speak() {
        console.log('some sounds');
    }
    move() {}
  }
  
  class Dog extends Animal {
    constructor(name, gender, age) {
      super(name, gender, age);
    }
    speak() {
        console.log('Bow-wow');
    }
    move() {
      console.log('walk');
    }
  }
  
  var dog1 = new Dog('Blacky', 'male', 3),
      dog2 = new Dog('Whity', 'female', 1),
      animal = new Animal('Browny', 'male', 5);
  dog1.speak();					// "Bow-wow"
  dog2.speak();					// "Bow-wow"
  animal.speak();					// "some sounds"

