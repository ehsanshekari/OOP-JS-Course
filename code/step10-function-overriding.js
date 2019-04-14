// Inheritance -> Overriding Functions in Child Classes

// Animal Base class
function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function (destination) {
    console.log(this.name, 'is walking to', destination);
};

var animal = new Animal('elephant');
animal.walk('melbourne'); // elephant is walking to melbourne

// Bird Child class
function Bird(name) {
    Animal.call(this, name);
}
Bird.prototype.__proto__ = Animal.prototype; // Object.create(Animal.prototype)

Bird.prototype.walk = function (destination) {
    Animal.prototype.walk.call(this,destination);
    console.log('Slowly');
}

Bird.prototype.fly = function (destination) {
    console.log(this.name, 'is flying to', destination);
}

var bird = new Bird('sparrow');
bird.walk('sydney'); // sparrow is walking to sydney
bird.fly('melbourne'); // sparrow is flying to melbourne