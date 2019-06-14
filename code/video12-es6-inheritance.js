// Inheritance -> ES6 -> Inheritance

class Animal{
    constructor(name){
        this.name = name;
    }

    walk(destination){
        console.log(this.name,'is walking to', destination);
    }
}

let animal1 = new Animal('Cat');
animal1.walk('city');

class Bird extends Animal{
    constructor(name, wingsLength){
        super(name);
        this.wingsLength = wingsLength;
    }

    fly(){
        console.log('Bird is Flying');
    }
}

let bird1 = new Bird('Sparrow', 50);
bird1.walk('Another City');
bird1.fly();