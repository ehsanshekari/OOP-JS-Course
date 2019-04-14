// Inheritance -> ES6

class Animal{
    constructor(name){
        this.name = name;
    }

    fly(destination){
        console.log(this.name, 'is walking to', destination);
    }
}

class Bird extends Animal {
    constructor(name){
        super(name);
    }
    walk(destination){
        console.log(this.name, 'is flying to', destination);
    }
}

let sparrow = new Bird('sparrow');
sparrow.walk('Tehran');
sparrow.fly('Tehran');



