// ES6: Inheritance

class Animal {
  constructor(name) {
    this.name = name;
  }

  walk(destination) {
    console.log(`${this.name} is walking to ${destination}`);
  }
}

class Bird extends Animal {
  constructor(name, wingsLength){
    super(name);
    this.wingsLength = wingsLength;
  }

  fly(){
    console.log(`${this.name} is flying`);
  }
}

let bird1 = new Bird('eagle', 100);
console.log(bird1.name);
bird1.walk('mountain');
bird1.fly();
