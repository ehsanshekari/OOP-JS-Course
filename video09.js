// Inheritance: Node.js Way

var util = require('util');

function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function () {
  console.log(this.name, 'is walking!');
}

function Bird(name, wingsLength) {
  // Call the Animal constructor
  Animal.call(this, name);
  this.wingsLength = wingsLength;
}

// Setup the prototype chain between Bird and Animal
// Bird.prototype.__proto__ = Animal.prototype;
/* Bird.prototype = Object.create(Animal.prototype, {
  constructor: {
    value: Bird,
    enumerable: false,
    writable: true,
    configurable: true
  }
});*/

util.inherits(Bird, Animal); // This is first step

Bird.prototype.fly = function () {
  console.log(this.name, 'is flying!');
}

var aBird = new Bird('myBird', 35);
aBird.walk();
aBird.fly();

