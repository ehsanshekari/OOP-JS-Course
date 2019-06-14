// Inheritance -> Function Overriding
var inherits = require('util').inherits;

//Animal Base Class
function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function () {
  console.log(this.name, 'is walking');
}

// Bird Child Class
function Bird(name, wingsLength) {
  Animal.call(this, name);
  this.wingsLength = wingsLength;
}

inherits(Bird,Animal); // First Prototype Setup Then Add Functions to Bird Prototype 

Bird.prototype.walk = function(){
  Animal.prototype.walk.call(this);
  console.log('Bird is walking');
}

Bird.prototype.fly = function () {
  console.log(this.name, 'is flying with wingsLength of', this.wingsLength);
}

var bird1 = new Bird('sparrow', 50);
bird1.walk();
bird1.fly();
console.log(bird1.constructor.name);
console.log(bird1 instanceof Bird, bird1 instanceof Animal); // true true

