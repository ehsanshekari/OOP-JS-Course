// Inheritance -> Checking Inheritance Chain

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

Bird.prototype.fly = function (destination) {
    console.log(this.name, 'is flying to', destination);
}

var bird = new Bird('sparrow');
console.log(bird instanceof Bird);
console.log(bird instanceof Animal);
