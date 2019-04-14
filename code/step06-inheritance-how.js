// Inheritance -> What Sould We Do

function Animal(name) {
    this.name = name;
}
Animal.prototype.walk = function (destination) {
    console.log(this.name, 'is walking to', destination);
};
var animal = new Animal('elephant');
animal.walk('melbourne'); // elephant is walking to melbourne 

function Bird(name) {
    // Call the Animal constructor
}
// Setup the prototype chain between Bird and Animal
// Finally create child instance
var bird = new Bird('sparrow');