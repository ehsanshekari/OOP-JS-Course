// Inheritance: Complete Example

function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function () {
  console.log(this.name, 'is walking!');
}

var aDog = new Animal('myDog');
aDog.walk();

function Bird(name, wingsLength) {
  // Call the Animal constructor
  Animal.call(this, name);
  this.wingsLength = wingsLength;
}

// Setup the prototype chain between Bird and Animal
// Bird.prototype.__proto__ = Animal.prototype;
Bird.prototype = Object.create(Animal.prototype, {
  constructor: {
    value: Bird,
    enumerable: false,
    writable: true,
    configurable: true
  }
});

Bird.prototype.fly = function () {
  console.log(this.name, 'is flying!');
}

var aBird = new Bird('myBird', 35);
aBird.walk();
aBird.fly();

console.log(aBird.constructor.name);
console.log(aBird instanceof Bird, aBird instanceof Animal);