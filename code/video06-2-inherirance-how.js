function Animal(name){
  this.name = name;
}

Animal.prototype.walk = function(){
    console.log(this.name, 'is walking');
}

function Bird(name){
    // Call the Animal Constructor
}

// Setup the prototype chain between Bird and Animal
