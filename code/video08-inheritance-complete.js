// // Inheritance -> Complete Example

//Animal Base Class
function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function () {
  console.log(this.name, 'is walking');
}

var animal1 = new Animal('Dog');
animal1.walk();

// Bird Child Class
function Bird(name, wingsLength) {
  Animal.call(this, name);
  this.wingsLength = wingsLength;
}

Bird.prototype.__proto__ = Animal.prototype; // Attention

Bird.prototype.fly = function () {
  console.log(this.name, 'is flying with wingsLength of', this.wingsLength);
}

var bird1 = new Bird('sparrow', 50);
bird1.walk();
bird1.fly();
console.log(bird1.constructor.name);
console.log(bird1 instanceof Bird, bird1 instanceof Animal); // true true

