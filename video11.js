// ES6: Classes

class Animal {
  constructor(name) {
    this.name = name;
  }

  walk(destination) {
    console.log(this.name, 'is walking to', destination);
  }

  static test(){
    console.log('This is a static function!!!!');
  }
}

Animal.test();
let animal1 = new Animal('Cat');
console.log(animal1.name);
animal1.walk('City');
