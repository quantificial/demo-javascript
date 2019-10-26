// prototype chain

function Animal(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }
  Animal.prototype.speak = function() {
    console.log('some sounds');
  };
  
  
  function Dog(name, gender, age) {1
    this.name = name;
    this.gender = gender;
    this.age = age;
  }
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  Dog.prototype.speak = function() {
     console.log('Bow-wow');
  };
  
  
  var dog = new Dog('Blacky', 'male', 3);
  dog.speak();							// "Bow-wow"
  dog.hasOwnProperty('name');			// "Bow-wow"

  // there is no hasOwnProperty defined in Dog and Animal
  // JS wll search upward, until Object.prototype
  